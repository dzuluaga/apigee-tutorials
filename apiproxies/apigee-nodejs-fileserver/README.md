apigee-nodejs-fileserver
=======
The following API proxy leverages Node.js to as a file server to serve images, text files, audio, and any other kind of files. So, essentially an API Proxy can be build to build websites, mock servers, login app (OAuth Login Apps), stateful, stateless apps. You name it!

#### So, How can I test this?

Easy, this bundle has been built using Grunt Plugin. In case you don't have Grunt installed. Follow the steps from [this tutorial](https://github.com/apigeecs/apigee-deploy-grunt-plugin.

Once Grunt is installed run this command:

```
grunt --env=test --username=$ae_username --password=$ae_password
```

#### How can I actually retrieve static content?

This command will return an HTML page:
```bash
$ curl https://testmyapi-test.apigee.net/apigee-nodejs-fileserver/htmlpage.html -v
```
This command will return an image:

```bash
$ curl https://testmyapi-test.apigee.net/apigee-nodejs-fileserver/images/tree.jpg -v
```

#### Deploy bundle without Grunt
[Download API Bundle](./apigee-nodejs-fileserver.zip) and deploy directly via Edge UI.