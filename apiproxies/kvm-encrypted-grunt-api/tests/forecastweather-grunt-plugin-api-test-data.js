/*jslint node: true */

var common = {
		url : "https://testmyapi-test.apigee.net/weathergrunt/apigee/forecastrss",
		url_node : "https://testmyapi-test.apigee.net/weathergrunt/forecastweather_node"
}

exports.simpleWeatherArray = function(){
	"use strict";
	var weatherArray = [
		{
			"url" : common.url + "?w=2502265",
			"name" : "Sunnyvale",
			"responseCode" : 200
		},
		{
			"url" : common.url + "?w=766273",
			"name" : "Madrid",
			"responseCode" : 200
		},
	];
	return weatherArray;
}

exports.simpleFormatArray = function(){
	"use strict";
	var weatherArray = [
		{
			"url" : common.url + "?w=2502265",
			"name" : "Sunnyvale",
			"contentType" : "text/xml;charset=UTF-8",
			"responseCode" : 200
		},
		{
			"url" : common.url + "?w=766273",
			"name" : "Madrid",
			"contentType" : "application/json;charset=UTF-8",
			"responseCode" : 200
		},
	];
	return weatherArray;
}

exports.nodeArray = function(){
	"use strict";
	var weatherArray = [
		{
			"url" : common.url_node + "/368149",
			"name" : "Cali-Colombia",
			"contentAssertion" : "Weather for Cali",
			"responseCode" : 200
		},
	];
	return weatherArray;
}