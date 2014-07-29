#forecastweather-faultrule-headers

The following API bundle provides an example for handling pathsuffix with Target connection without writing any custom code to rewrite the target url (basepath or query params).

####Deploy forecastweather-pathsuffix
The first thing you'll need is to deploy forecastweather-pathsuffix API Proxy bundle.
```
mvn install -Ptest -Dusername=$ae_username -Dpassword=$ae_password
```

**Note Maven pom.xml artifact and shared-pom.xmlcan be easily deployed by using [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin). 

####Send a request
The first thing you'll notice is that the target, Yahoo Weather Web Service is reached regardless the path suffix set in this request (/weather/forecastrss). So, the request is sent to (http://weather.yahooapis.com/forecastrss?w=2502265) without appending the suffix to it.
```
curl https://testmyapi-test.apigee.net/weatherpathsuffix/weather/forecastrss?w=2502265 -v
```

**Hint:** 
* Check target.copy.pathsuffix variable set to false in the [AssignMessage Policy](https://github.com/dzuluaga/apigee-tutorials/blob/master/apiproxies/forecastweather-pathsuffix/apiproxy/policies/AssignMessage.DisableTargetCopyPathSuffix.xml#L3) executed in Target Preflow. The purpose of this variable is to supress setting path suffix to the target. 
* Check [URL](https://github.com/dzuluaga/apigee-tutorials/blob/master/apiproxies/forecastweather-pathsuffix/apiproxy/targets/default.xml#L15) definition in TargetConnection. Note URL includes basepath to the resource.
* Note query params are set regardless target.copy.pathsuffix is set to false.

