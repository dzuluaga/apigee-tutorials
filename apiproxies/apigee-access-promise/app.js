'use strict';

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
  putCache(req.query.key, req.query.value, 120)
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

var server = app.listen(3003, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);

});
