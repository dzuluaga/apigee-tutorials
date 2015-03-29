var express = require('express'),
	forecastweather_node = require('./resources/forecastweather_node'),
	app = express();
	//lessMiddleware = require('less-middleware'),
	path = require('path');

// Authenticator
app.use(express.basicAuth(function(user, pass) {
"use strict";
 return user === 'testUser' && pass === 'testPass';
}));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/forecastweather_node/:woeid', forecastweather_node.get)
app.listen(9000);