apigee-nodejs-sync
======
Some examples that benchmark execution of request in parallel vs series with async.

#### How to deploy this api proxy?
Deploy this api proxy with [apigeetool node.js](https://www.npmjs.com/package/apigeetool) version with this command:

```bash
$ apigeetool deploynodeapp -n 'apigee-nodejs-async' -d . -m app.js -b '/apigee-nodejs-async' -u $ae_username -o testmyapi -e test -p $ae_password -R
```

#### The following commands will execute two types of queries

##### Execute series execution

```bash
$ curl http://127.0.0.1:8888/test?async=series
```
**Note execution time through the console: execution time is seconds: 6.313**


##### Execute parallel execution

```bash
$ curl http://127.0.0.1:8888/test?async=paralell
```

**execution time is seconds: 0.789**

##### Deploy to apigee

```bash
apigeetool deploynodeapp -n 'apigee-nodejs-async' -d . -m app.js -b '/apigee-nodejs-async' -u $ae_username -o testmyapi -e test -p $ae_password -R
```
