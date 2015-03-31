var nock_artists = require('../nock/artists');
var	fs = require('fs');
var nock = require('nock');
module.exports = {
	enableNock : enableNock,
	generateMocks : generateMocks
}

function enableNock(enable){
	if(enable){
		nock_artists.artists(nock);
	}
	else{
		nock.cleanAll();
		nock.enableNetConnect();
	}
}

/** generates record.js in root with entries to be manually included in nock/artists.js **/
function generateMocks(generate){
	if(generate){
		var appendLogToFile = function(content) {
		  fs.appendFile('./nock/records.js', content);
		}
		nock.recorder.rec({
		  logging: appendLogToFile,
		});
	}
}