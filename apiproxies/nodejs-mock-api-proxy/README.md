Node.js Mock API Proxy
======
The purpose of this API Proxy is to provide the tools to develop API proxies with mocks.

#### What is the use case for this?
It is common when building APIs to start testing, design, and development without a backend. Also, even when the backend is ready, you may want continue to run tests in isolation, without hitting the backend. The following image describes the process of testing using mock HTTP responses. However, this is easier to say than done when the solution is built from scratch. In this tutorial, I'll be providing some recommendations in terms of frameworks and a reference architecture to implement this approach based on best practices.

![HTTP Mocking](https://www.dropbox.com/s/clvtcf31cfu3j9c/HTTP%20Mocking.png?dl=1 "HTTP Mocking")

#### A few recommendations

##### Avoid adding unnecessary complexity by introducing external mocks

The first recommendation before building response mocks is to avoid as much as possible to reinvent the wheel by storing the responses in a separate server of the API Proxy. Instead, keep it simple by storing them as local Node.js modules. In this way, you'll reduce the impact on latency significantly. This approach is also useful, given that from a testing standpoint, you will want to test the API Management layer in isolation from the backend.

##### Leverage a Mock Framework

In this solution, we're be leveraging [Nock](https://github.com/pgte/nock). Nock has built-in capabilities to store HTTP responses along with request parameters, headers, and the functionality to disable requests to the backend. The main benefit of leveraging a framework such as Nock is the ability to build the API as close as possible to the final solution. Therefore, less rework will be needed to wire up the API to the actual backend when it becomes available.

#### Getting started

##### Step 1: Make requests to the backend as usual if available

The following code shows nothing unusual; it's a standard express route to /artists/:artist_name, which executes an HTTP request to the backend. If the backend is not available, in the next step you'll find how to wire up to a dummy backend in the mock responses.

```javascript
//app.js
app.get('/artists/:artist_name', function(req, res, body){
    var artist_name = req.params.artist_name;
    request('http://lyrics.wikia.com/api.php?artist=' + artist_name + '&fmt=json', function (error, response, body) {
      if (!error && response.statusCode === 200) {
          //console.log(response.headers)
        res.writeHead(200, {'Content-Type':'application/json;charset=utf-8',
            'x-nock': response.headers['x-nock'] || 'false'});
        res.end(body);
      }
    })
})
```

##### Step 2: Record Mocks with Backend Responses

The file artists.js under node/nock folder contains a few entries of mock responses. In our case, there will be three artists with mocks: Radiohead, Depeche Mode, and Juanes. At this point, you can assign the endpoint in the backend that will be intercepted by Nock and generate the response instead of sending the request to the backend.

```javascript
//artists.js located in nock folder
var options = {allowUnmocked: true};
nock('http://lyrics.wikia.com:80', options)
  .persist()
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]}...]},
```
As you can see, responses not only include the response content but also response code and headers. Nock also has the facilities to record backend responses when the backend is available.

**Note persist() this will allow the nock to be reused. Otherwise, one nock can only be used once. Also, allowUnmocked set to true will enable the API to still make requests to the backend for request without matching nocks.**

##### Step 3:  Enable Nock based on X-Enable-Nock Header

The following Express middleware function determines whether or not to send the request to the backend by calling 'nockHelper.enableNock' function with true or false.

```javascript
app.use(function (req, res, next) {
    "use strict";
    if(req.header('X-Enable-Nock') && req.header('X-Enable-Nock') === 'true') {
        //console.log('enabling nock');
        nockHelper.enableNock(true);
    }
    else if(!req.header('X-Enable-Nock') || req.header('X-Enable-Nock') === 'false') {
        //console.log('disabling nock');
        nockHelper.enableNock(false);
    }
    next();
});
```

##### Test it
```bash
$ curl -X GET -H "X-Enable-Nock: true" https://testmyapi-test.apigee.net/nodejs-mock-api-proxy/artists/juanes -v
```
Try other artists: Radiohead and Depeche Mode.
Verify the response contains x-nock header set to true and false when X-Enable-Nock is set to false. Please modify URL above to your own org ```https://{org}-{env}.apigee.net/nodejs-mock-api-proxy/artists/juanes```

##### Generate Mocks from existing Backend
**nockHelper.generateMocks(true)** in app.js will save all nock responses in records.js in nock folder.

##### Deploy it in your org

This API can be deployed in your org by following instructions from [Apigee Deploy Grunt Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin#steps-to-get-started-deprecated) or by importing **nodejs-mock-api-proxy.zip** under target through the UI.

#### Nock
Most of the magic in this sample is done by leveraging Nock capabilities. Please check [Nock documentation](https://github.com/pgte/nock) for further details.