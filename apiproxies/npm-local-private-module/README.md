How to leverage NPM private modules - locally or remotely on Apigee Edge
======
It's very common to try to leverage private modules for many reasons. For instance, I work at a company that doesn't want to expose my code to the open community. Or maybe the code is too specific that, it doesn't solve a common problem, that the open community will not benefit from it. The following steps are based from the StackOverflow question posted [here](http://stackoverflow.com/questions/10386310/how-to-install-a-private-npm-module-without-my-own-registry).

**npm-local-private-modules to the rescue!!!**

Essentialy, a local module is another module that exists in the filesystem or in the network e.g. Git. Let's try the first one:

#### Option 1: Node module exists in the filesystem

The following code has two modules: npm-main and npm-package1. Npm-main requires npm-package1
```bash
$ tree -L 2
.
├── README.md
├── npm-main
│   ├── index.js
│   ├── node_modules
│   └── package.json
└── npm-package1
    ├── index.js
    └── package.json
```

This can be fixed by using npm the following way:
```bash
$ npm install ../npm-package1 --save
```
Notice that package.json will include the dependency in npm-main as this:
```javascript
  "dependencies": {
    "npm-package1": "file:../npm-package1"
  }
```

Now, let us run this example:

```bash
// 1 - install packages
$ npm install
// 2 - run this example
$ node index.js
Hello World Main
Look Ma! Hello World from local module!
```

#### Option 2: Node module exists in the filesystem as a gzipped tarball
If instead of pointing to a folder you want to use a tarball, you can use the following approach. Notice that using ```npm pack``` will result in a tarball with the build version!

```bash
npm install ../npm-package1/npm-package1-1.0.0.tgz --save
```

**package.json:**
```javascript
  "dependencies": {
    "npm-package1": "file:../npm-package1/npm-package1-1.0.0.tgz"
  }
```
**The downside of this approach is that the file requires to be stored in a location that is available through the filesystem, therefore it'd be required to download it locally either with Git Submodules or copying them on the same branch, not recommended.**

#### Option 3: Node module exists on the network
A network location is another convenient way to store modules in a central location. For instance: Apigee Edge with Basic Authentication, AWS S3, Dropbox, Google Drive, etc.

```bash
$ npm install "https://npmrepouser:passw0rd@testmyapi-test.apigee.net/npm-private-repo-proxy/npm-package1-1.0.0.tgz" --save
```

**Note that we're using Apigee Node.js capabilities to serve files to store npm-package1-1.0.0.tgz protected with Basic Authentication. See credentials in URL. More details on how to build this API Proxy. See [API Proxy Node.js Basic Auth](https://github.com/dzuluaga/apigee-tutorials/tree/master/apiproxies/api-proxy-nodejs-basic-auth)**

**package.json:**
```javascript
  "dependencies": {
    "npm-package1": "https://npmrepouser:passw0rd@testmyapi-test.apigee.net/npm-private-repo-proxy/npm-package1-1.0.0.tgz"
  }
```

Since we're using in this case plain old Web Server capabilities, an example of this file stored in Dropbox can be this [one](https://www.dropbox.com/s/t6rbdqijhft6pb8/npm-package1-1.0.0.tgz?dl=1). The downside of leveraging services such as Dropbox is that folder are either protected with non-basic authentication or completely public.

#### Option 4: Host a private repo on a cloud provider

Another option to host privately your packages is to use a cloud privider such as: [Gemfury](https://gemfury.com/) or Nodejitsu. IMO, the downside of this approach is that these services essentially provide Option #3 at some price.

#### Option 5: Host a private repo locally

[Sinopia](https://www.npmjs.com/package/sinopia) is an open source private NPM repository. You can take it for a spin in your laptop, however the biggest downside of this service is that it requires either a server or running it on a cloud provider.