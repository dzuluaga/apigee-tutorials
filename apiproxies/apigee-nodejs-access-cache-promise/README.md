apigee-access-cache-promise
===========================

This sample provides an Express.js app enabled with Apigee-Access Cache PUT and GET with promises.

```javascript
var express = require('express');
var app = express(),
    Promise = require("native-promise-only"),
    apigee = require('apigee-access'),
    cache = apigee.getCache();


app.get('/', function (req, res) {
  getCache(req.query.key)
    .then(function(value) {
      if(value) res.send('Key/Value retrieved from cache: ' + value);
      else res.send('Key/Value not found in cache');
    })
    .catch(function(err) {
      console.error(err);
      res.send(err);
    });
});

app.post('/', function (req, res) {
  //console.log(req.query.key);
  putCache(req.query.key, req.query.value)
    .then(function(back) {
      res.send('okay');
    })
    .catch(function(err) {
    	console.log(err);
    	res.send(err);
    });
});

function putCache(key, value){
  return new Promise(function(resolve, reject){
    cache.put(key, value, function(err){
    	if (err) reject(err);
	else resolve(null);
    });
  });
}

function getCache(key) {
  return new Promise(function(resolve,reject){
    cache.get(key, function(err, data){
      if (err) reject(err);
      else resolve(data);
    });
  });
}

```

### How to deploy this API Proxy

Clone this directory:
```bash
$ npm install
```

```
apigeetool deploynodeapp -n apigee-access-nodejs-cache-promise -d . -m app.js -o testmyapi -e test -b /apigee-access-nodejs-cache-promise -u $ae_username -p $ae_password -V
```

### How to test this API Proxy

#### Store Key/Value in Cache

```
$ curl http://testmyapi-test.apigee.net/apigee-access-nodejs-cache-promise\?key\=name\&value\=1234 -X POST
okay%
```

#### Retrieve a Key/Value from Cache

```bash
$ curl http://testmyapi-test.apigee.net/apigee-access-nodejs-cache-promise\?key\=name -X GET
Key/Value retrieved from cache: 1234%
```

**Note response with Key/Value retrieved from cache.**

#### Retrieve a non-existing Key/Value in Cache

```bash
$ curl http://testmyapi-test.apigee.net/apigee-access-nodejs-cache-promise\?key\=invalid -X GET
Key/Value not found in cache%
```
