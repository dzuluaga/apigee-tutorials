a127-apigeetool
========
All a127 projects can be imported using apigeetool. Here's how:

#### Step 1
cd into the folder:
```bash
$ cd a127-apigeetool
```
#### Step 2 - Deploy the a127 Node.js App
Run apigeetool command to deploy this a127 Node.js App:
```bash
$ apigeetool deploynodeapp --username $ae_username --password $ae_password --organization testmyapi --api a127-with-apigeetool --environment test --directory . -m app.js -b /a127-with-apigeetool -U
```
Apigeetool can be download using NPM. [Check it out here](https://www.npmjs.com/package/apigeetool).

#### Step 3 - Test it with cURL
You can test it by calling this resource:
```bash
$ curl http://testmyapi-test.apigee.net/a127-with-apigeetool/hello\?name\=Diego
"Hello, Diego!"%
```

#### Uploading Large API Bundles
Apigeetool will separately upload files through the management API. So, you'll notice under API Proxy History how all resources are being imported a separated resource files, instead of a single zip api bundle.

![alt text](https://www.dropbox.com/s/occmp8si3ss885g/Screenshot%202015-06-19%2015.37.50.png?dl=1 "API Proxy History")

Note that jar files and NPM module are uploaded independently by Apigeetool:

![alt text](https://www.dropbox.com/s/b4n88jkqme0temw/Screenshot%202015-06-19%2015.44.14.png?dl=1 "")

