npm-private-repo-apigee-proxy
======
This API provides a basic scaffolding code to host NPM private packages. The use case for this solution is when an organization wants to leverage Node.js and NPM to load packages from repos that aren't exposed publicly. Check the following tutorial for possible alternatives to hosting NPM private modules [npm-private-modules](https://github.com/dzuluaga/apigee-tutorials/tree/master/apiproxies/npm-local-private-module).

####How it works

NPM Private Repo Apigee Proxy can be deployed on any Apigee Edge organization. Essentially, it's a file server protected with Basic Authentication, see app.js to configure it. For instance: the file npm-package1-1.0.0.tgz can be fetched with this URL [https://npmrepouser:passw0rd@testmyapi-test.apigee.net/npm-private-repo-proxy/npm-package1-1.0.0.tgz](https://npmrepouser:passw0rd@testmyapi-test.apigee.net/npm-private-repo-proxy/npm-package1-1.0.0.tgz).

So, modules can be installed from anywhere by providing the URL. In our case, npm-package1-1.0.0.tgz can be installed using this command:

```bash
$ npm install "https://npmrepouser:passw0rd@testmyapi-test.apigee.net/npm-private-repo-proxy/npm-package1-1.0.0.tgz" --save
```

The package installed under node_modules is a simple function that prints out a string:

```javascript
    var local_package = require('npm-package1');

    //This will execute the module stored locally
    local_package.sayHello();
    //prints "Look Ma! Hello World from local module!"
```

#### Deploy it in your own Org

There are a few way to deploy this API proxy. The easier one is to manually importing it through the UI **npm-private-repo-proxy.zip** stored under the target folder.

The second option is to leverage [Apigee Deploy Grunt Plugin](https://github.com/dzuluaga/generator-apigee-deploy-grunt-api).