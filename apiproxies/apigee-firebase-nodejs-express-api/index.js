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

/*  ref.on("child_added", function (snapshot) {
    res.send(snapshot);
  });*/
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})







/*var ref = firebase.app().database().ref();
ref.once('value')
 .then(function (snap) {
 console.log('snap.val()', snap.val());
 });*/

// Get a reference to the database service
//var database = firebase.database();


//WORKS
/*firebase.database().ref('/test123').set({
    username: "test222",
    email: "iddd333222@mail.com",
    array_val: [{"elem": "elem_val"}, {"elem": "elem_val2"}]
});
*/

// READ
// Find all dinosaurs whose names come before Pterodactyl lexicographically.
/*var ref = firebase.database().ref("/");
ref.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.key);
});*/

/*return firebase.database().ref('/products').once('value').then(function(snapshot) {
  //var username = snapshot.val();
  console.log(snapshot.val())
  // ...
});
*/