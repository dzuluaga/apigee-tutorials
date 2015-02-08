var nock = require('nock');

var express = require('express')
var app = express()

app.get('/', function (req, res) {
	var couchdb = nock('http://www.google.com')
	                .get('/')
	                .reply(200, {
	                  _id: '123ABC',
	                  _rev: '946B7D1C',
	                  username: 'dzuluaga',
	                  email: 'dzuluaga@apigee.com'
	                 });

	var request = require('request')

	request('http://www.google.com', function(error, response, body){
		if(!error && response.statusCode == 200){
			console.log(body)
			res.send(body)
		}
	})
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


