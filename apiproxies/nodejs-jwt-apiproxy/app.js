var express = require('express'),
  app = express(),
  jwt = require('jsonwebtoken'),
  fs = require('fs');

app.get('/sign-jwt', function (req, res) {

  try {
    // sign with default (HMAC SHA256)
    var token = jwt.sign({
      foo: 'bar'
    }, req.query.secret);

  } catch (e) {
    return res.status(400).send(e);
  }
  res.send(token);
});

app.get('/verify-jwt', function (req, res) {
  try {
    var decoded = jwt.verify(req.query.token, req.query.secret);
  } catch (e) {
    return res.status(400).send(e);
  }
  res.send(decoded);
});

app.get('/sign-jwt-one-hour-expiration', function (req, res) {
  try {
    var token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: 'foobar'
    }, 'secret');
  } catch (e) {
    return res.status(400).send(e);
  }
  res.send(token);
});

app.get('/sign-jwt-older-token', function (req, res) {

  // sign with default (HMAC SHA256)
  var older_token = jwt.sign({
    foo: 'bar',
    iat: Math.floor(Date.now() / 1000) - 30
  }, req.query.secret);
  res.send(older_token);
});

app.get('/sign-jwt-with-private-key', function (req, res) {

  // sign with RSA SHA256 
  var cert = fs.readFileSync('private.key'); // get private key 
  var token = jwt.sign({
    foo: 'bar',
    aud: '123456'
  }, cert, {
    algorithm: 'RS256'
  });
  res.send(token);
});

app.get('/verify-jwt-asymetric', function (req, res) {

  // verify a token asymmetric 
  var cert = fs.readFileSync('public.pem'); // get public key 
  jwt.verify(req.query.token, cert, function (err, decoded) {
    res.send(err || decoded);
  });
});

app.get('/sign-jwt-asynchronously', function (req, res) {

  // sign asynchronously 
  var cert = fs.readFileSync('private.key'); // get private key 
  jwt.sign({
    foo: 'bar'
  }, cert, {

    algorithm: 'RS256'
  }, function (err, token) {
    res.send(token);
  });
});

app.get('/validate-jwt-claims', function (req, res) {

  // verify jwt id 
  var cert = fs.readFileSync('public.pem'); // get public key 
  jwt.verify(req.query.token, cert, {
    audience: '123456'
  }, function (err, decoded) {
    // if jwt id mismatch, err == invalid jwt id 
    res.send(err || decoded);
  });
});


var server = app.listen(3000, function () {

  var host = server.address().address,
    port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})