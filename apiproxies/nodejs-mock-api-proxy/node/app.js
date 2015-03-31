var express = require('express'),
	app = express(),
	path = require('path'),
	request = require('request'),
	nockHelper = require('./nock/nock-helper');

/**
	Step 1: nockHelper.generateMocks.
	This will generate records.js to be included in nock/artists.js
	DISABLE after including mocks into artists.js
**/
//nockHelper.generateMocks(true); //IMPORTANT: COMMENT THIS LINE AFTER CAPTURING REQUESTS.
/**
	Step 2: nockHelper.enableNock
**/
// gets executed for every request to the app
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

app.get('/artists/:artist_name', function(req, res, body){
	"use strict";
	/*eslint no-unused-vars:0 */
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
app.listen(9000);