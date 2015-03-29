exports.get = function(req, res){
	var woeid = req.params.woeid;
	//res.end('Hello, World!');
	var request = require('request');

	request('http://weather.yahooapis.com/forecastrss?w=' + woeid, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
    	res.writeHead(200, {'Content-Type':'application/json;charset=utf-8'});
    	res.end(JSON.stringify(response));	
	  }
	})
}