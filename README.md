common branch for APIs
====
A common branch can be leveraged to store common artifacts across multiple APIs. For instance, code fragments that are repetitive between APIs or JavaScript policies with functions that meet a common pattern.

The following steps illustrate how to create a common branch within you Git repository along with its directory layout.

#####Step 1: Create branch
```git checkout --orphan common```


#####Step 2: Remove any files and folders
```
git rm -rf .
sudo rm -rf {folder_to_be_deleted}
```

#####Step 3: Create layout example see
https://github.com/dzuluaga/apigee-tutorials/tree/common/

```
.
├── README.md
└── apiproxy
    ├── policies
    │   └── Test-Step-From-Common.xml
    ├── proxies
    │   └── proxies-common.xml
    ├── resources
    │   └── jsc
    │       └── js-common.js
    └── targets
```

#####Step 4: Commit and push any changes to common branch.
```
git commit -am 'common branch'
git push --set-upstream origin common
```

#####Step 4: Switch to an API or master branch
```git checkout master```

**The following steps provide an example of an api proxy enabled with a git Submodule that resides in common branch**
#####Step 5: Create a Git Submodule within the current folder

```git submodule add git@github.com:dzuluaga/apigee-tutorials.git common```

See an [example of a API proxy with a Git submodule](https://github.com/dzuluaga/apigee-tutorials/tree/master/apiproxies/forecastweather-assignmessage-servicecallout-common).

![Common submodule](https://www.dropbox.com/s/1amtrtkolv37da1/common_github.png?dl=1 "Common submodule")


#####Step 6: Switch to the branch within the common folder
```git checkout common```

#####Step 7: Commit and push changes to master branch
```
git commit -am 'include common to api'
git push
```

**Note:** After git master repo is cloned, all submodule folders will be empty. So, the following two commands are required to be executed in order to include them.
```
git submodule init
git submodule update
```

#####Step 8: Enable Apigee Grunt.js Deploy plugin to include, and replace fragments from common Git submodule - TODO
[String-replace task in Gruntfile.js](https://github.com/apigeecs/apigee-deploy-grunt-plugin/blob/master/Gruntfile.js#L112) can be configured to manage these replacements by configuring it according to [String Replace NPM Module](https://www.npmjs.org/package/grunt-string-replace#simple-inline-content).