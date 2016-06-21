var express = require('express')
    app = express(),
    request = require('request'),
    url = require('url'),
    promise = require('bluebird'), // you'll need bluebird or other module to convert callbacks to promises
    request = promise.promisify(require('request')); // 

app.get('/*', function (req, res) {
  var query = url.parse(req.url).query; //get query params from url
  request('http://lyrics.wikia.com/api.php?' + query)
    .then(function (response) {
      res.json(JSON.parse(response.body));
    })
    .catch(function (err) {
      res.send(err);
    })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})