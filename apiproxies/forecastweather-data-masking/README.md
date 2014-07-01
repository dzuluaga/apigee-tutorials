#forecastweather-data-masking
--------

The following tutorial provides the steps to enable data masking on Apigee Edge for a specific API bundle. For more details refer to [Apigee Data Masking official documentation](http://apigee.com/docs/api-services/content/data-masking).

#### Step 1: Deploy forecastweather-data-masking
The first thing you'll need is to deploy forecastweather-data-masking API Proxy bundle. This bundle will be used to apply some of the data masking techniques explained here.

**Note Maven pom.xml artifact and shared-pom.xmlcan be easily deployed by using [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin). 

#### Step 2: Add data masks to a specific element
```
curl -H "Content-type:text/xml" -X POST -d \
'<MaskDataConfiguration name="default">
  <Variables>
     <Variable>request.queryparam.w</Variable>
  </Variables>
</MaskDataConfiguration>' \
https://api.enterprise.apigee.com/v1/o/testmyapi/apis/forecastweather-data-masking/maskconfigs \
-u $ae_username:$ae_password
```

#### Step 3: Data mask request parameters and inspect value through Apigee Trace Tool
Test the API resource running this command:
```
curl https://testmyapi-test.apigee.net/weathercheck/forecastrss\?w\=2502265 -v
```
![Data Mask Request Params](https://www.dropbox.com/s/i5cr1v5h8yi5ful/Data-Mask-Request-Parameters.png?dl=1 "Data Mask Request Params")

#### Step 4: Data mask response body elements
Note Trace session must be restarted, so the Data Masking configurations are effective in a new Debug session.
```
curl -H "Content-type:text/xml" -X POST -d \
'<MaskDataConfiguration name="default">
  <Variables>
      <Variable>request.queryparam.w</Variable>
  </Variables>
  <XPathsResponse>
    <XPathResponse>/rss/channel/title</XPathResponse>
    <XPathResponse>/rss/channel/language</XPathResponse>
    <XPathResponse>/rss/channel/lastBuildDate</XPathResponse>
    <XPathResponse>/rss/channel/ttl</XPathResponse>
    <XPathResponse>/rss/channel/description</XPathResponse>
  </XPathsResponse>
</MaskDataConfiguration>' \
https://api.enterprise.apigee.com/v1/o/testmyapi/apis/forecastweather-data-masking/maskconfigs \
-u $ae_username:$ae_password
```
![Data Mask Response](https://www.dropbox.com/s/6i65ccwl0lfeu5l/DataMask-Response.png?dl=1 "Data Mask Response")
