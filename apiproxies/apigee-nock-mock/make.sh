#!/bin/sh

apigeetool deploynodeapp -u $ae_username -o $org -e $env -n 'diego-nock-mock' -d . -m app.js -b /diego-nock-mock
