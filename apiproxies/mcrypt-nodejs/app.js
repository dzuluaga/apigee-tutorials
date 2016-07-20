var express = require('express'),
    app = express(),
    MCrypt = require('mcrypt').MCrypt;

app.get('/', function (req, res) {
  var desEcb = new MCrypt('des', 'ecb');
  desEcb.open('madepass'); // we are set the key

  var ciphertext = desEcb.encrypt('this is top secret message!');
  console.log(ciphertext.toString('base64'));

  res.send('Hello World! ' + ciphertext.toString('base64'));
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})