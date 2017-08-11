nodejs-jwt-apiproxy
===================
Enabling APIs with JWT is also very simple with Node.js and Apigee Edge. Leverage [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) NPM module to decode, sign, and verify tokens. You can run API proxy sample either executed locally or on a service running Node.js such the Apigee Edge. Get started following these steps:

Step 1: How to Run Locally
===========
```
Clone this repo and cd to `nodejs-jwt-apiproxy`
$ npm install
$ npm start
```

**You're done, let the test begin!**

Step 2: Test
====

#### Sign a quick message with HMAC SHA256
```bash
generate token:

  curl http://localhost:3000/sign-jwt?secret=shhhh
  
  test on Edge:
  
  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/sign-jwt?secret=shhhh

verify token:

  curl http://localhost:3000/verify-jwt?token={TOKEN_HERE}&secret=shhhh

  test on Edge:

  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/verify-jwt?token={TOKEN_HERE}&secret=shhhh

```

#### Backdate a JWT for 30 seconds
```bash
curl http://localhost:3000/sign-jwt-older-token?secret=shhhh

Edge:
curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/sign-jwt-older-token?secret=shhhh
```

#### Get JWT signed with RSA SHA256 private key 
```bash
curl http://localhost:3000/sign-jwt-with-private-key

Edge:
curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/sign-jwt-with-private-key
```

**Generated key with this command: `openssl genrsa -out ca.key 1024`. Intended for Dev purposes.**

#### Get JWT signed with RSA SHA256 private key 
```bash
generate token:

  curl http://localhost:3000/sign-jwt-asynchronously

  Edge:
  
  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/sign-jwt-with-private-key

validate token:

  curl http://localhost:3000/verify-jwt-asymetric?token={JWT_TOKEN_HERE}

  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/verify-jwt-asymetric?token={JWT_TOKEN_HERE}


**Used this command to generate the public key from the private.key file. `openssl rsa -in private.key -pubout -out public.pem`**

```

#### Get JWT signed with RSA SHA256 private key 
```bash
generate token:

  curl http://localhost:3000/sign-jwt-asynchronously

  Edge:
  
  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/sign-jwt-with-private-key

validate token:

  curl http://localhost:3000/verify-jwt-asymetric?token={JWT_TOKEN_HERE}

  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/verify-jwt-asymetric?token={JWT_TOKEN_HERE}


**Used this command to generate the public key from the private.key file. `openssl rsa -in private.key -pubout -out public.pem`**

```

#### Verify JWT Claims  
```bash
  generate token with **Get JWT signed with RSA SHA256 private key** 

  curl http://localhost:3000/validate-jwt-claims?token={TOKEN_HERE}

  Edge:
  curl http://testmyapi-test.apigee.net/nodejs-jwt-apiproxy/validate-jwt-claims?token={TOKEN_HERE}
```

Step 3: Deploy to Edge
==============
Import [node-jwt-apiproxy.zip](node-jwt-apiproxy.zip) file and deploy Proxy on [Edge UI](http://enterprise.apigee.com).

This API Proxy can be deployed to Edge running the following command:
```bash
$ apigeetool deploynodeapp -n nodejs-jwt-apiproxy -d . -m app.js -o $org_name -e test -b /nodejs-jwt-apiproxy -u $ae_username -p $ae_password -V
```

**$org_name, $ae_username, $ae_password are placeholders for your info after you sign up for Edge.**

**the code presented in this repo is intented for didactical purposes. Please make sure you consult with your API Team architects and developers before trying it out in production**