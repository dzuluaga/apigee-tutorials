Apigee OAuth 1.0a API Proxy Example
======

This API bundle provides examples of OAuth 1.0a flows in Apigee. Additional examples of OAuth 1.0a are available from [official Apigee sample proxies](https://github.com/apigee/api-platform-samples/tree/master/sample-proxies/oauth10a-3legged).

For API deployment, see Deploying API bundle with Grunt.js section below.

This diagram illustrates the steps in a typical OAuth 1.0a 2 or 3-legged flows. The aim of the commands below is to implement each one of these steps:
![alt text](https://www.dropbox.com/s/cwvbq7v18a1u3m3/apigee-oauth10a-api-flow.png?dl=1 "OAuth 1.0a 3-legged flow")

### Prerequisites
#### Setup an API Product with API Proxy

![alt text](https://www.dropbox.com/s/vy2462ak0cgf63z/apigee-oauth10a-api-product.png?dl=1 "Apigee Product API")

#### Associate API Product to Developer App

![alt text](https://www.dropbox.com/s/wch7d2m65kzweqi/apigee-oauth10a-api-dev-app.png?dl=1
 "API Product associated to Dev App")

### How to test this API proxy?
#### Step 1: Generate request token

Generate the signature by leveraging an online tool such as [OAuth Google Code](http://oauth.googlecode.com/svn/code/javascript/example/signature.html). Replace each of the fields as the image below:

![alt text](https://www.dropbox.com/s/p7ctnxthhc5w1t9/apigee-oauth10a-api-generate-request-token.png?dl=1 "Generate Signature")

Note Authorization Header in cURL command is replaced by the value generated from OAuth Google Code above.

```bash
curl https://testmyapi-test.apigee.net/oauth10a/request-token -H 'Authorization: OAuth realm="",oauth_callback="oob",oauth_version="1.0",oauth_consumer_key="Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf",oauth_timestamp="1419958125",oauth_nonce="lK9pirgOBrz",oauth_signature_method="HMAC-SHA1",oauth_signature="my4Xw73uqCZ4TAsIlFdZniXjCRw%3D"'
```

##### Response
```xml
<response><oauth_parameter name="issued_at"><![CDATA[1419958149296]]></oauth_parameter><oauth_parameter name="expires_at"><![CDATA[1419959949296]]></oauth_parameter><oauth_parameter name="application_name"><![CDATA[680bdfea-7dd6-466e-ac5a-09460726ab76]]></oauth_parameter><oauth_parameter name="scope"><![CDATA[null]]></oauth_parameter><oauth_parameter name="status"><![CDATA[approved]]></oauth_parameter><oauth_parameter name="oauth_callback_confirmed"><![CDATA[true]]></oauth_parameter><oauth_parameter name="organization_id"><![CDATA[0]]></oauth_parameter><oauth_parameter name="oauth_token"><![CDATA[hEeiY1GdJ8eSfGqqLcZOdAqr3Ud7]]></oauth_parameter><oauth_parameter name="oauth_token_secret"><![CDATA[bGzq6oGpAP8TZMzOtQz3nv2cNcmW]]></oauth_parameter></response>
```

#### Step 2: Generate verifier code
```bash
curl -i https://testmyapi-test.apigee.net/oauth10a/verifier -H 'requesttoken:hEeiY1GdJ8eSfGqqLcZOdAqr3Ud7' -H 'appuserid:Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf' -H 'verifiercode:RANDOM_VALUE_abc123456'
```
Note requesttoken from previous step is used as the input to generate a verifier code. This verifier code is similar to the authorization code in a 3-legged OAuth 2.0 flow, which is exchanged later for an access token. Checkout [Apigee OAuth 1.0a official documentation](http://apigee.com/docs/api-services/reference/oauth-10-policy#associatetoken) for more information about its use case. Also note verifiercode for the sake of convenience has been geenrated from the client side, however in a production environment, it is recommended to handle it by the Identity Provider from the server side.

##### Response
```xml
HTTP/1.1 200 OK
content-type: text/xml
Content-Length: 727
Connection: keep-alive

<response><oauth_parameter name="issued_at"><![CDATA[1419958892788]]></oauth_parameter><oauth_parameter name="expires_at"><![CDATA[1419960692788]]></oauth_parameter><oauth_parameter name="application_name"><![CDATA[680bdfea-7dd6-466e-ac5a-09460726ab76]]></oauth_parameter><oauth_parameter name="app_user_id"><![CDATA[Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf]]></oauth_parameter><oauth_parameter name="organization_id"><![CDATA[0]]></oauth_parameter><oauth_parameter name="oauth_token"><![CDATA[hEeiY1GdJ8eSfGqqLcZOdAqr3Ud7]]></oauth_parameter><oauth_parameter name="oauth_verifier"><![CDATA[RANDOM_VALUE_abc123456]]></oauth_parameter><oauth_parameter name="verifier_code"><![CDATA[RANDOM_VALUE_abc123456]]></oauth_parameter></response>
```

#### Step 3: Generate access token

```bash
curl -i https://testmyapi-test.apigee.net/oauth10a/access-token -H 'Authorization: OAuth realm="",oauth_verifier="RANDOM_VALUE_abc123456",oauth_version="1.0",oauth_consumer_key="Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf",oauth_token="hEeiY1GdJ8eSfGqqLcZOdAqr3Ud7",oauth_timestamp="1419959776",oauth_nonce="b4QTmy5VHmT",oauth_signature_method="HMAC-SHA1",oauth_signature="9%2FArMBOTBfZMnzkuJlDSCcEC7%2FQ%3D"'
```
![alt text](https://www.dropbox.com/s/2httoeo9lzsbraz/apigee-oauth10a-api-generate-access-token.png?dl=1 "Generate access token signature")
Note oauth_verifier from previous step is included as parameter and also note how token secret from step #1 is also required.

##### Response
```xml
<response><oauth_parameter name="developer.email"><![CDATA[joe@weathersample.com]]></oauth_parameter><oauth_parameter name="issued_at"><![CDATA[1419959797438]]></oauth_parameter><oauth_parameter name="expires_at"><![CDATA[1419961597438]]></oauth_parameter><oauth_parameter name="application_name"><![CDATA[680bdfea-7dd6-466e-ac5a-09460726ab76]]></oauth_parameter><oauth_parameter name="scope"><![CDATA[null]]></oauth_parameter><oauth_parameter name="status"><![CDATA[approved]]></oauth_parameter><oauth_parameter name="organization_id"><![CDATA[0]]></oauth_parameter><oauth_parameter name="oauth_token"><![CDATA[JhfwmIv6vCAnMKVhutaxstkoQNFx]]></oauth_parameter><oauth_parameter name="enduser_id"><![CDATA[Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf]]></oauth_parameter><oauth_parameter name="oauth_token_secret"><![CDATA[7lDfNC5qNLrKrjUZSQroYtPetdmO]]></oauth_parameter><oauth_parameter name="verifier_code"><![CDATA[RANDOM_VALUE_abc123456]]></oauth_parameter></response>
```

#### Step 4: Make an authorized call to the API
```bash
curl -i https://testmyapi-test.apigee.net/oauth10a/get -H 'Authorization: OAuth realm="",oauth_callback="oob",oauth_version="1.0",oauth_consumer_key="Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf",oauth_token="JhfwmIv6vCAnMKVhutaxstkoQNFx",oauth_timestamp="1419961751",oauth_nonce="JnuQcUqEMTF",oauth_signature_method="HMAC-SHA1",oauth_signature="lWZr%2FNsRGzSyaQw8XMdZIlGXP8c%3D"'
```

![alt text](https://www.dropbox.com/s/le3cab517o55vil/apigee-oauth10a-api-get-request-httpbin.png?dl=1 "Authorized request to Get API")
Note token and token secret values are the input from step #3.

##### Get response from HTTPBIN (default target)
```json
HTTP/1.1 200 OK
Server: gunicorn/18.0
Date: Tue, 30 Dec 2014 17:58:47 GMT
Content-Type: application/json
Content-Length: 694
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Via: 1.1 vegur
Connection: keep-alive

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Authorization": "OAuth realm=\"\",oauth_callback=\"oob\",oauth_version=\"1.0\",oauth_consumer_key=\"Csgk9z6lfHk98Jjaa85UgwsZTVfZqCsf\",oauth_token=\"gqgOwI365thEII8asdH3M0Kp9gP3\",oauth_timestamp=\"1419962312\",oauth_nonce=\"uOShElpCGTR\",oauth_signature_method=\"HMAC-SHA1\",oauth_signature=\"qJwOM8A3pbFxDbxwBmy%2F5COWgVY%3D\"",
    "Connect-Time": "1",
    "Connection": "close",
    "Host": "httpbin.org",
    "Total-Route-Time": "0",
    "User-Agent": "curl/7.37.1",
    "Via": "1.1 vegur",
    "X-Request-Id": "629edece-6dee-45f7-b9b6-44579bc84789"
  },
  "origin": "107.23.127.104",
  "url": "http://httpbin.org/get"
}
```

### Deploying API bundle with Grunt.js
This API Bundle can be deployed by leveraging [Apigee Deploy Grunt.js Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin) or via any tool that can import Apigee proxy bundles.

License
-------
MIT