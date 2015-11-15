#!/bin/sh

cd apiproxies/apigee-nodejs-fileserver
npm install
cd node
npm install
cd ..
grunt --env=test --curl=true --username=akoo@apigee.com --password=$ae_password --upload-modules=true --debug=true
