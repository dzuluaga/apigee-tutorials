var express = require('express');
var async = require('async');
var app = express();
var request = require('request');

app.get('/test', function(req, res){
	var start = new Date();
	if(req.query.async === 'series'){
		async.series(arraySongs, 
				function(error, results){
					var end = new Date() - start;
					console.log('execution time is seconds: ' + end/1000)
					res.json(results)
				});
	}else{
		async.parallel(arraySongs, 
				function(error, results){
					var end = new Date() - start;
					console.log('execution time is seconds: ' + end/1000)
					res.json(results)
				});
	}

}).listen(8888);

function getSongs(queryString, callback){
	request('http://lyrics.wikia.com/api.php ' + queryString,
						function(error, response, body){
							callback(null, body);
						})
}

console.log('Server running at http://127.0.0.1:8888/');


var arraySongs = [
			function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},
			function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			},function(callback){
				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
			}];


// ,
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Billy%20Joel&fmt=json&func=getSong&song=Shout',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Elton John&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Metallica&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Jorge Drexler&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=U2&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=The Killers&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Ed Sheeran&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Ellie Goulding&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Ariana Grande&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Carrie Underwood&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Sia&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},
// 			function(callback){
// 				request('http://lyrics.wikia.com/api.php?action=lyrics&artist=Sia&fmt=json',
// 					function(error, response, body){
// 						callback(null, body);
// 					})
// 			},

// [
// 			function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},
// 			function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},function(callback){
// 				getSongs('?action=lyrics&artist=Depeche%20Mode&fmt=json&func=getSong&song=Shout', callback);
// 			},
// 		]