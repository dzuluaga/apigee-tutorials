ForecastWeather API Proxy to support multiple API version
=====
This Apigee API bundle provides an example of how to deal with API that should support multiple versions. A good practice for API versioning is described here [Your API Versioning is Wrong](http://java.dzone.com/articles/your-api-versioning-wrong). So, this bundle can handle multiple base paths e.g. /v1/testbasepath, /v2/testbasepath, /*/testbasepath, as well as /testbasepath. Internally, it has multiple flow and a catch all for flows that have no version in URL (/version). As described in the article above, your API should support at least URL and Header versioning.


## Deploying with Grunt.js

See [Apigee Deploy Grunt.js Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin)

### Test /v1/testbasepath

```curl https://testmyapi-test.apigee.net/v1/testbasepath/forecastrss\?w\=2502265\&u\=c -v```

will produce

``` {
         "version": "/v1/",
         "comments" : "entering v1 flow"
      }
```

### Test /v2/testbasepath

```curl https://testmyapi-test.apigee.net/v2/testbasepath/forecastrss\?w\=2502265\&u\=c -v```

will produce

```
      {
         "version": "/v2/",
         "comments" : "entering v2 flow"
      }
```

### Test /testbasepath - no version value

```curl https://testmyapi-test.apigee.net/testbasepath/forecastrss\?w\=2502265\&u\=c -v```

will produce

```
      {
         "version": "/testbasepath/",
         "comments": "Catch-All"
      }
```
