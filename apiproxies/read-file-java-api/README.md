read-file-java-api
======

##Read API proxy files using Apigee Java Callout Policies
A common requirement is to get access to configuration data stored in either XML, JSON, or even binary files during API Proxy runtime. For example, to sign SOAP header messages, first you'll need to load Keystore files, SOAP file templates, and then replace the content of the SOAP files with SOAP WS-Security type of signature.

This API bundle only provides an example of how to read these files and then implement any logic to provide this functionality. So, implementing the logic after reading the file is out of scope of this API bundle. For further step-by-step instructions on how to actually sign an XML message, you can leverage [this blog](http://pushpalankajaya.blogspot.ca/2014/03/signing-soap-messages-generation-of.html) or another documentation that describes this process.

##How to test this API proxy?

The following API call will return the XML content stored in a stockTemplate.xml file, which is zipped into templates.jar file.

```bash
curl http://testmyapi-test.apigee.net/weatherjavacallout/javacallout
```
**Response:**
```xml
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
<soap:Body xmlns:m="http://www.example.org/stock">
  <m:GetStockPrice>
    <m:StockName>IBM</m:StockName>
  </m:GetStockPrice>
</soap:Body>
</soap:Envelope>
```

### How it works

#### Java Callout Policy - SimpleJavaCallout.java
com.example.SimpleJavaCallout is in charge of reading the content of the file loaded as a "class" into an inputstream object. We use Common IOUtil to convert into InputString into a string variable.

```java
InputStream fstream = this.getClass().getResourceAsStream("/templates/stockTemplate.xml"); //read stockTemplate.xml as a class from classpath
StringWriter writer = new StringWriter();
IOUtils.copy(fstream, writer, "UTF-8");
String theString = writer.toString();
messageContext.setVariable("stockTemplateFileContent", theString); //assign file content to stockTemplateFileContent variable
messageContext.setVariable("response.content", theString); // assign file content to response.content variable
return ExecutionResult.SUCCESS;
```

####Debugging the response
You can also debug the content of the response by enabling Apigee Trace Tool to inspect stockTemplateFileContent variable.

![Reading API Proxy files from Java Callout Policy](https://www.dropbox.com/s/gtjm6gpdzfvvmub/testmyapi_-_Apigee_and_read-file-java-api_js_%E2%80%94_apiproxies.png?dl=1 "Reading API Proxy files from Java Callout Policy")

####How to automate generation of templates.jar file
This step eliminates manual changes to compress the content of templates.jar file included under apiproxy/resources/java folder. So, any files stored under java/templates will be included in the templates.jar file generated under java/lib folder. This is achieved by Gruntfile compress/templates task.

### Deploying API bundle with Grunt.js
This API Bundle can be deployed by leveraging [Apigee Deploy Grunt.js Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin) or via any tool that can import Apigee proxy bundles.

License
-------
MIT