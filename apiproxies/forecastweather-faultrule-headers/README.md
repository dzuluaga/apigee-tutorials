#forecastweather-faultrule-headers

The following API bundles provides an example to raise RaiseFault policies including headers from the Target. 
For more details refer to [Exception handling with RaiseFault](http://apigee.com/docs/api-services/content/exception-handling-raisefault).


####Deploy forecastweather-faultrule-headers
The first thing you'll need is to deploy forecastweather-faultrule-headers API Proxy bundle. 

**Note Maven pom.xml artifact and shared-pom.xmlcan be easily deployed by using [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin). 

####Send request to this API Proxy skipping RaiseFault policy
This request includes -v to show headers returned from the backend/target. Included headers: P3P, Vary, Age, Via, etc.

```
curl https://testmyapi-test.apigee.net/weatherfaultrule/forecastrss?w=56465629 -v
```

####Send request to this API Proxy raising RaiseFault policy
Note raisefault parameter to apply the condition that executes raisefault policy. Headers included above will be also included.
```
curl https://testmyapi-test.apigee.net/weatherfaultrule/forecastrss\?w\=56465629\&raisefault\=true -v
```

