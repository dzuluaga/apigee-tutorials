var express = require('express'),
  app = express(),
  Promise = require('native-promise-only'),
  rp = require('request-promise'),
  debug = require('debug')('app.js');

app.get('/albums', function (req, res, next) {
  try {

    // get an array of promises of artists. Each artist to be passed as: e.g. artists[]=radiohead&artists[]=phoenix
    Promise.all(req.query.artists
        .map(function (artist_name) {
          return getAlbum(artist_name);
        }))
      .then(function (all_artists) {

        //convert each resolved promised into JSON and convert it into an array.
        res.json(all_artists.map(function (artist) {
          return JSON.parse(artist)
        }));
      })
  } catch (e) {
    res.send(e.message);
  }
});

// this is the function that makes the call to the backend. Note usage of request promise
function getAlbum(artist) {
  var options = {
    uri: 'http://lyrics.wikia.com/api.php',
    qs: {
      artist: artist,
      fmt: 'json',
      action: 'lyrics'
    }
  };
  return rp(options);
}

var server = app.listen(3000, function () {
  var host = server.address().address,
    port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});