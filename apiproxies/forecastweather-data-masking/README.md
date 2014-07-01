#forecastweather-data-masking

The following tutorial provides the steps to enable data masking on Apigee Edge for a specific API bundle. Since Apigee Trace Tool is a consumer app of the Debug API, Data Masking will also apply to it.
For more details refer to [Apigee Data Masking official documentation](http://apigee.com/docs/api-services/content/data-masking).


####Deploy forecastweather-data-masking
The first thing you'll need is to deploy forecastweather-data-masking API Proxy bundle. This bundle will be used to apply some of the data masking techniques explained here.

**Note Maven pom.xml artifact and shared-pom.xmlcan be easily deployed by using [Apigee Deploy Maven Plugin](https://github.com/apigee/apigee-deploy-maven-plugin). 

####Add data masks to a specific element
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

####Data mask request parameters and inspect value through Apigee Trace Tool
Test the API resource running this command:
```
curl https://testmyapi-test.apigee.net/weathercheck/forecastrss\?w\=2502265 \
-H 'user-agent:TEST-VALUE' -H 'password:tobeEncrypted' -v
```
![Data Mask Request Params](https://www.dropbox.com/s/i5cr1v5h8yi5ful/Data-Mask-Request-Parameters.png?dl=1 "Data Mask Request Params")

####Data mask response body elements - Backend Response
Note Trace session must be restarted, so the Data Masking configurations are effective in a new session.

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

####Data mask response body elements after XMLtoJSON transformation
Since after conversion from XML to JSON the payload will still show elements in clear text, it is necessary to apply data masking through JSONPathResponse.
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
  <JSONPathsResponse>
    <JSONPathResponse>$.rss.channel[*].title</JSONPathResponse>
    <JSONPathResponse>$.rss.channel[*].language</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.lastBuildDate</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.ttl</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.description</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.link</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.description</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.speed</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.temperature</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.distance</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.pressure</JSONPathResponse>
  </JSONPathsResponse>  
</MaskDataConfiguration>' \
https://api.enterprise.apigee.com/v1/o/testmyapi/apis/forecastweather-data-masking/maskconfigs \
-u $ae_username:$ae_password
```
![Data Mask Response after XMLtoJSON](https://www.dropbox.com/s/nmyhkwjkbwsbf8t/DataMask-Response-XMLtoJSON.png?dl=1 "Data Mask Response after XMLtoJSON")

####Data mask request headers
Note request.header.user-agent and password headers.

```
curl -H "Content-type:text/xml" -X POST -d \
'<MaskDataConfiguration name="default">
  <Variables>
      <Variable>request.queryparam.w</Variable>
      <Variable>request.header.user-agent</Variable>
      <Variable>request.header.password</Variable>
  </Variables>
  <XPathsResponse>
    <XPathResponse>/rss/channel/title</XPathResponse>
    <XPathResponse>/rss/channel/language</XPathResponse>
    <XPathResponse>/rss/channel/lastBuildDate</XPathResponse>
    <XPathResponse>/rss/channel/ttl</XPathResponse>
    <XPathResponse>/rss/channel/description</XPathResponse>
  </XPathsResponse>
  <JSONPathsResponse>
    <JSONPathResponse>$.rss.channel[*].title</JSONPathResponse>
    <JSONPathResponse>$.rss.channel[*].language</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.lastBuildDate</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.ttl</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.description</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.link</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.description</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.speed</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.temperature</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.distance</JSONPathResponse>
    <JSONPathResponse>$.rss.channel.units.pressure</JSONPathResponse>
  </JSONPathsResponse>  
</MaskDataConfiguration>' \
https://api.enterprise.apigee.com/v1/o/testmyapi/apis/forecastweather-data-masking/maskconfigs \
-u $ae_username:$ae_password
```
![Data Mask Request Headers](https://www.dropbox.com/s/89pv0aoinutj44a/DataMask-RequestHeaders.png?dl=1 "Data Mask Request Headers")
