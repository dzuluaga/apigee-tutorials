forecastweather-assignmessage-servicecallout
=======
This API demostrates usage of AssignMessage policy setting a request object, which is subsequently used by a ServiceCallout Policy.

Installation
===
This API can be installed by following steps from [Apigee Deploy Grunt Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin#directions-to-setup-grunt-for-an-apigee-api-bundle).

Run it
====
```
curl https://testmyapi-test.apigee.net/service-callout-variable
```

Run tests
====
```
grunt mochaTest --env=test
```
**Note:** Override test/weather-test.js with actual target api proxy.