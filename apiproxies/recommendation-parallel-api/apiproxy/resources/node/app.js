var express = require('express')
var app = express()
var async = require('async');

app.get('/recommendations/:userid', function (req, res) {
	async.parallel([
		    getRecommendationScores,
		    getProfileScores,
		    getGeneralScores,
		    getProductsExcessInventory
			],
		    // the results array will contain ['Recommendation Scores', 'Profile Scores', 'General Scores', 'Excess in inventory products']
		    getProductDescriptions.bind({res: res})
	);
})

function getRecommendationScores(callback){
	//API call to /recommendationscores?userid=foo
    callback(null, {name : 'Recommendation Scores' , type : 'recommendation-score'});
}

function getProfileScores(callback){
	//API call to /profilescores?userprofile=bar
    callback(null, {name : 'Profile Scores', type : 'profile-score'});
}

function getGeneralScores(callback){
	//API call to /generalscores
    callback(null, {name : 'General Scores', type : 'general-score'});
}

function getProductsExcessInventory(callback){
	//API call to /excess-inventory
    callback(null, {name : 'Excess in inventory products', type : 'excess-inventory-product'});
}

function getProductDescriptions(err, results){
	//API call to /descriptions
	for(var i = 0 ; i < results.length; i++){
		results[i].description = 'and the description' + ' for ' + results[i].name; //this will add description attribute to the score
	}
	this.res.json(results);
}

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})