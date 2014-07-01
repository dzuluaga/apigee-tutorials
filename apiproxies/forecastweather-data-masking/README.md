#forecastweather-data-masking
--------

The following tutorial provides the steps to enable data masking on Apigee Edge for a specific API bundle. For more details refer to [Apigee Data Masking official documentation](http://apigee.com/docs/api-services/content/data-masking).

####Step 1: Deploy forecastweather-data-masking
The first thing you'll need is to deploy forecastweather-data-masking API Proxy bundle. This bundle will be used to apply some of the data masking techniques explained here.

**Note Maven pom.xml artifact and shared-pom.xmlcan be easily deployed by using [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin). 

####Step 2: Add data masks to a specific element
```
curl -H "Content-type:text/xml" -X POST -d \
'<MaskDataConfiguration name="default">
  <Variables>
     <Variable>request.queryparam.w</Variable>
  </Variables>
</MaskDataConfiguration>' \
https://api.enterprise.apigee.com/v1/o/testmyapi/apis/forecastweatherapi/maskconfigs \
-u $ae_username:$ae_password
```

####Step 3: Debug session through Apigee Trace Tool and inspect the request variable

```
curl https://testmyapi-test.apigee.net/weathercheck/forecastrss\?w\=2502265 -v

```
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
