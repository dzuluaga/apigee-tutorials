Apigee Node.js Api Proxy with Basic Authentication
======
This API Proxy provides a sample of Basic Authentication in Apigee as a Node.js app.

#### Test
Try this [URL](https://testmyapi-test.apigee.net/node-basic-auth/tree.jpg). This resource is protected with Basic Authentication. Use username 'testUser' and password 'testPass'.

#### How it works
The following code is the only element that is necessary to protect resources with Basic Authentication. Please keep in mind that you can also leverage [Apigee Developer Model](http://apigee.com/docs/management/apis/get/organizations/%7Borg_name%7D/developers/%7Bdeveloper_email%7D/apps/%7Bapp_name%7D) to leverage client id and secret on this API proxy. Hint: load variables with [Apigee Access](http://apigee.com/docs/api-services/content/using-apigee-access).

```javascript
	app.js
	// Authenticator
	app.use(express.basicAuth(function(user, pass) {
	"use strict";
	 return user === 'testUser' && pass === 'testPass';
	}));
```

#### Deploy it in your own Org

There are a few way to deploy this API proxy. The easier one is to manually deploy through the UI **api-proxy-nodejs-basic-auth.zip** stored under the target folder.

The second option is to leverage [Apigee Deploy Grunt Plugin](https://github.com/dzuluaga/generator-apigee-deploy-grunt-api). Once it has been deployed in your own org, you can leverage a link similar to the above ```https://{org}-{env}.apigee.net/node-basic-auth/tree.jpg```.

Once you have the plugin installed, just run this command to deploy this API in your org:
```javascript
$ grunt --env=test --username=$ae_username --password=$ae_password --debug

```