var firebase = require('firebase'),
  express = require('express'),
  app = express();

var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(config);

app.post('/products', function (req, res) {
  var ref = firebase.database().ref('/products');
  var obj = [{
      id: "123",
      description: "Android Newborn Pacifier"
    },
    {
      id: "345",
      description: "Android Pixel"
    },
    {
      id: "223",
      description: "Chromecast Ultra"
    }
  ];
  res.send(ref.push(obj)); // Creates a new ref with a new "push key"
  ref.set(obj); // Overwrites the path
  ref.update(obj); // Updates only the specified attributes
});

app.get('/products', function (req, res) {
  var products = firebase.database().ref("/products");
  firebase.database().ref("/products").on('value', function(snapshot){
    res.send(snapshot.val());
  }, function(errorObject) {
    req.send("The read failed: " + errorObject.code);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});