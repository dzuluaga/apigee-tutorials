<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [How to host NPM private modules?](#how-to-host-npm-private-modules)
      - [Option 1: Node module exists in the filesystem](#option-1-node-module-exists-in-the-filesystem)
      - [Option 2: Node module exists in the filesystem as a gzipped tarball](#option-2-node-module-exists-in-the-filesystem-as-a-gzipped-tarball)
      - [Option 3: Node module exists over the network](#option-3-node-module-exists-over-the-network)
        - [Option 3.1: NPM modules exists over the network - Git](#option-31-npm-modules-exists-over-the-network---git)
          - [Master branch](#master-branch)
          - [Common branch](#common-branch)
          - [Tag](#tag)
          - [with Basic Authentication for Private Git repo](#with-basic-authentication-for-private-git-repo)
      - [Option 4: Host a private repo on a cloud provider](#option-4-host-a-private-repo-on-a-cloud-provider)
      - [Option 5: Host a private repo without replicating entire couchDB](#option-5-host-a-private-repo-without-replicating-entire-couchdb)
      - [Option 6: Host a private replicating entire couchDB](#option-6-host-a-private-replicating-entire-couchdb)
      - [Option 7: npm link - symlink to local package](#option-7-npm-link---symlink-to-local-package)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

How to host NPM private modules?
======
It's very common to try to leverage private modules for many reasons. For instance, I work at a company that doesn't want to expose my code to the open community. Or maybe the code is too specific that, it doesn't solve a common problem, that the open community will not benefit from it. The following steps piggy bag on the StackOverflow question posted [here](http://stackoverflow.com/questions/10386310/how-to-install-a-private-npm-module-without-my-own-registry).

**npm-local-private-modules to the rescue!!!**

<center>
<img src="https://www.dropbox.com/s/60loa8wi3r7n8f9/Screenshot%202015-04-06%2010.54.55.png?dl=1" alt="1">
</center>

<div style="text-align:center" markdown="1">

![Ways to host NPM Private Modules](https://www.dropbox.com/s/60loa8wi3r7n8f9/Screenshot%202015-04-06%2010.54.55.png?dl=1)

</div>

Essentially, a local module is another module that exists on the filesystem or the network e.g. Git. Let's try the first one:

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

You can reference local modules by using npm the following way:
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
Look Ma! Hello World from a local module!
```

#### Option 2: Node module exists in the filesystem as a gzipped tarball
If instead of pointing to a folder you want to use a tarball, you can use the following approach. Notice that is using ```npm pack``` will result in a tarball with the build version!

```bash
npm install ../npm-package1/npm-package1-1.0.0.tgz --save
```

**package.json:**
```javascript
  "dependencies": {
    "npm-package1": "file:../npm-package1/npm-package1-1.0.0.tgz"
  }
```
**The downside of this approach is that the file requires to be stored in a location that is available on the filesystem, therefore it'd be required to download it locally either with Git Submodules or to copy them on the same branch, not recommended.**

#### Option 3: Node module exists over the network
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

Since we're using, in this case, plain old Web Server capabilities, an example of this file stored in Dropbox can be this [one](https://www.dropbox.com/s/t6rbdqijhft6pb8/npm-package1-1.0.0.tgz?dl=1). The downside of leveraging services such as Dropbox is that folder are either protected with non-basic authentication or completely public.

##### Option 3.1: NPM modules exists over the network - Git
In a similar fashion to Option #3, private modules can be stored in a Git repo branch or tag. For instance, npm-package1 can be downloaded using either git or https as follows:

###### Master branch
```javascript
  "dependencies": {
    "npm-package1": "git+https://github.com/dzuluaga/npm-package1.git"
  }
```

###### Common branch
[StackOverflow question about referencing git branches with anchors.](http://stackoverflow.com/questions/16350673/depend-on-a-branch-using-a-git-url-in-a-package-json)
```javascript
  "dependencies": {
    "npm-package1": "git+https://github.com/dzuluaga/npm-package1.git#common"
  }
```

###### Tag
Similar to branches, tags can be referenced with anchors. In this case, references can be made to specific branches managed by [SemVer](http://semver.org/).
```javascript
  "dependencies": {
    "npm-package1": "git+https://:github.com/dzuluaga/npm-package1.git#v.1.0.0"
  }
```

###### with Basic Authentication for Private Git repo
Github private repos in Github can be referenced by providing a Github token. For further details, see [response in StackOverflow](http://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json).
See [Creating an access token for command line use](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). See usage Via [OAuth Tokens](https://developer.github.com/v3/auth/#via-oauth-tokens).
```javascript
  "dependencies": {
    "npm-package1": "git+https://{GITHUB_TOKEN}:x-oauth-basic@github.com/dzuluaga/npm-package1.git#v.1.0.0"
  }
```

**Please be aware of risks of token leaks in package.json file, therefore it is recommended to assess security before implementing this approach.**

#### Option 4: Host a private repo on a cloud provider

Another option to host your packages privately with a cloud provider such as [Gemfury](https://gemfury.com/) or Nodejitsu. IMO, the downside of this approach is that these services essentially provide Option #3 at some price.

#### Option 5: Host a private repo without replicating entire couchDB

[Sinopia](https://www.npmjs.com/package/sinopia) is an open source private NPM repository. You can take it for a spin in your laptop. However, the biggest downside of this service is that it requires either a server or running it on a cloud provider.

#### Option 6: Host a private replicating entire couchDB

Another option is [replicate the entire couchDB](https://github.com/npm/npm-registry-couchapp). This approach seems to be the official one. However, I'd take it with a grain of salt. For small projects, I'd start with a hybrid approach, by leveraging public NPM for public modules and private modules, leverage options 1, 2, or 3.

#### Option 7: npm link - symlink to local package

Npm comes with handy way to create a globally-installed symbolic link to any package, which can be used from another package. Golo Roden explains it well in (this video)[http://www.sitepoint.com/using-npm-link-node-js/]. Here's the sequence of steps to make npm-package1 available for npm-main package:

In our case, npm-package1 is symlinked:

```bash
$ cd npm-package1
$ npm link
/usr/local/lib/node_modules/npm-package1 -> /Users/ApigeeCorporation/Documents/tools/git/apigee-tutorials/apiproxies/npm-local-private-module/npm-package1
```

Then use reference npm link from npm-main:
```bash
$ cd npm-main
$ npm link npm-package1

unbuild npm-package1@1.0.0
/Users/ApigeeCorporation/Documents/tools/git/apigee-tutorials/apiproxies/npm-local-private-module/npm-main/node_modules/npm-package1 -> /usr/local/lib/node_modules/npm-package1 -> /Users/ApigeeCorporation/Documents/tools/git/apigee-tutorials/apiproxies/npm-local-private-module/npm-package1

$ ls node_modules
express      npm-package1
```

**Please be aware that dependencies between modules can be managed by using capabilities from Git. Git Subtreee or Submodules can provide the ability to retrieve source code from other repos. Also, tools such as [Apigee Deploy Grunt Plugin](https://github.com/dzuluaga/generator-apigee-deploy-grunt-api) along with [shell target](https://github.com/dzuluaga/generator-apigee-deploy-grunt-api/blob/master/app/templates/Gruntfile.js#L139) or can provide the ability to automate steps to create links and set references.**