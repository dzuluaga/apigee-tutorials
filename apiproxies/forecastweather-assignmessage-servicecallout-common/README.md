forecastweather-assignmessage-servicecallout-common
=======
This API demostrates usage of AssignMessage policy setting a request object, which is subsequently used by a ServiceCallout Policy.

This API also leverages a Git submodule. This common submodule is used to demonstrate the ability to have a common git branch within another branch, so it can leveraged to include fragments already written by others in common branch. See [common branch](https://github.com/dzuluaga/apigee-tutorials/tree/common) for steps on how to create the common Git submodule.

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