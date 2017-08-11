Parallel Request NodeJS API Proxy with Promises
==================================================

#### Objective

Build a Node.js API Proxy that makes http requests to a backend in parallel and based on JavaScript Promises.

### Why Promises

Promises will make your code easier to read and maintain. In compare to:
 
- *The callback pattern*, which in my opinion becomes messy very quickly by creating nested levels of code execution. There are numerous articles about this pattent denominated [callback hell](http://callbackhell.com/).

- Async, most JS newbies discover async and fall in love with it. However, async module dictates the design of your code in a way that feel orchestrated rather than choreograped. Archestration requires a central module to control the execution. In my opinion, this pattern is helpful to solve the problem of parallel execution, however code is harder to become modular by building more independent components that talk to each other.  

#### So, how do we solve the problem of sequential calls?
Making calls to your backend in a sequential or waterfall fashion is not sustainable. Imagine making `n` calls, each one taking 1 second. As a result, 10 calls will take 10 seconds to complete, as each subsequent call will need to wait for the previous call to complete, blocking the execution of each subsequent call. Your API will suffer of serious performance issues rather quickly.

*Sequential Request calls to your backend will look like this:*
```
  request 1
          --> request 2
                      --> request 3
                                  --> request n... (each request taking ~1 second)
```

#### Solve sequential call with parallel calls

What if instead of a waterfall approach, requests could happen in parallel. So intead of 10 seconds from last example, it'd take only 1 second or less in total.

*So request calls to your backend will look like this:*

```
-->  request 1
-->  request 2
-->  request 3
-->  request n...
  (each request taking ~1 second, but calls happening in parallel)
```

### Getting Started

#### Clone this repo
```bash
$ git clone git@github.com:dzuluaga/apigee-tutorials.git
$ cd apigee-tutorials/apiproxies/parallel-nodejs-api-proxy-with-promises
$ npm install
$ npm start
```

**Open your browser with this URL:**
[http://localhost:3000/albums\?artists[]=depeche+mode&artists[]=radiohead&artists[]=phoenix](http://localhost:3000/albums?artists[]=depeche+mode&artists[]=radiohead&artists[]=phoenix)

The output of this API will return an array with three artists in it:

```json
[
  { "artist": "Depeche Mode",
    "albums": [] 
  },
  { "artist": "Radiohead",
    "albums": [] 
  },
  { "artist": "Phoenix",
    "albums": [] 
  }
]
```

Note artists query param following array format with  leading brackets `[]`. So, you can keep adding elements to the array. Try adding a new artist to the query string &artists[]=the+lumineers.

You can keep adding elements dynamically to the list. However, yours API won't get slower, as you your calls are executed in parallel.

#### Test with cURL locally

```bash
curl http://localhost:3000/albums?artists[]=depeche+mode&artists[]=radiohead&artists[]=phoenix -v --globoff
```

#### Test on Edge Cloud - Deploy the zip file
If you want to test API Proxy, you can either import [parallel-promise-nodejs-api-proxy.zip](./parallel-promise-nodejs-api-proxy.zip) into Edge or use Apigeetool to import it manually.

```bash
curl https://testmyapi-test.apigee.net/parallel-promise-nodejs-api/albums?artists[]=depeche+mode&artists[]=radiohead&artists[]=phoenix -v --globoff
```

#### Deploy to Edge with ApigeeTool
Make sure you replace the placeholders $org, $ae_username, and $ae_password with your own organization and credentials.
```bash
$ apigeetool deploynodeapp -n parallel-promise-nodejs-api -d . -m server.js -o $org -e test -b /parallel-promise-nodejs-api -u $ae_username -p $ae_password -v secure -V
```

#### How it works

```javascript
app.get('/albums', function (req, res, next) {
  try {

    // get an array of promises of artists. Each artist to be passed as: e.g. artists[]=radiohead&artists[]=phoenix
    Promise.all(req.query.artists
        .map(function (artist_name) {
          return getAlbum(artist_name);
        }))
      .then(function (all_artists) {

        //convert each resolved promised into JSON and convert it into an array.
        res.json(all_artists.map(function (artist) {
          return JSON.parse(artist)
        }));
      })
  } catch (e) {
    res.send(e.message);
  }
});

// this is the function that makes the call to the backend. Note usage of request promise
function getAlbum(artist) {
  var options = {
    uri: 'http://lyrics.wikia.com/api.php',
    qs: {
      artist: artist,
      fmt: 'json',
      action: 'lyrics'
    }
  };
  return rp(options);
}
```

#### Let me know your thoughts

Check Apigee Community [Post](https://community.apigee.com/questions/45475/how-can-we-make-a-call-asynchronously-through-node.html).