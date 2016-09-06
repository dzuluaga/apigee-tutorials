var http = require('http');
var express = require('express');
var app = express();
var jsforce = require('jsforce'),
    apigee = require('apigee-access'),
    utils = require('./utils'),
    Promise = require('native-promise-only');

var sforce_credentials = {
    clientId: process.env.clientId || 'REPLACE_WITH_SFDC_CLIENT_ID',
    clientSecret: process.env.clientSecret || 'REPLACE_WITH_SFDC_CLIENT_SECRET',
    redirectUri: process.env.redirectUri ||  'REPLACE_WITH_SFDC_REDIRECT_URI'
}

console.log('node.js application starting...');

var svr = http.createServer(app);

app.get('/', function(req, res) {
    res.send("Hello from salesforce");
});

//redirecting to the login page
app.get('/oauth/auth', function(req, res) {
    res.redirect(app.locals.oauth2.getAuthorizationUrl({scope: 'api'}));
    console.log("connected");
});

/* OAuth callback from SF, pass received auth code and get access token */
app.get('/oauth/callback', function(req, res) {
  console.log(app.locals.oauth2);
  var conn = new jsforce.Connection({oauth2: app.locals.oauth2});
    var code = req.query.code;
    conn.authorize(code, function(err, userInfo) {
    if (err) { return res.send(err); }
    res.send("success");
    });
});

function init_server(svr, sforce_credentials) {
  return server_promise = new Promise(function(resolve, reject) {
    svr.listen(3000, function initialize() {
      app.locals.sfdc = {};

      // UNCOMMENT IF YOU WANT TO USE SECRETS IN APIGEE VAULT
      if (true /*apigee.getMode() === apigee.STANDALONE_MODE*/) {

        // apigee standalone mode
        app.locals.sfdc = {
          clientId: sforce_credentials.clientId,
          clientSecret: sforce_credentials.clientSecret,
          redirectUri: sforce_credentials.redirectUri
        };
        app.locals.oauth2 = new jsforce.OAuth2(app.locals.sfdc);
        console.log(app.locals.sfdc);
        console.log('Node HTTP server is listening');
        resolve();
        } else {

          console.log('initializing in Apigee Mode');
          return utils.get_vault_key('clientId', 'sfdc', 'environment')
            .then(function (clientId) {
              app.locals.sfdc.clientId = clientId || sforce_credentials.clientId;
              return utils.get_vault_key('clientSecret', 'sfdc', 'environment');
            })
            .then(function (clientSecret) {
              app.locals.sfdc.clientSecret = clientSecret || sforce_credentials.clientSecret;
              return utils.get_vault_key('redirectUri', 'sfdc', 'environment');
            })
            .then(function (redirectUri) {
              app.locals.sfdc.redirectUri = redirectUri || sforce_credentials.redirectUri;
            })
            .then(function(empty) {
              console.log('using', app.locals.sfdc);
              console.log('Node HTTP server is listening');
              app.locals.oauth2 = new jsforce.OAuth2(app.locals.sfdc);
              resolve();
            })
            .catch(function (err) {
              console.log('got an error', err.stack);
              console.log(err);
              reject(err);
            });

        }
    });
  });
};

init_server(svr, sforce_credentials);