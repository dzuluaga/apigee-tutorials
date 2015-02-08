apigee-nock-mock
===========

This API proxy serves as an example for nock NPM module, which can be leveraged for rapid prototyping of web APIs, which instead of serving responses from the actual backend, it could be used to return responses mocked by Node mocks.

##### How to install it?
```bash
apigeetool deploynodeapp -u $ae_username -o testmyapi -e test -n 'diego-nock-mock' -d . -m app.js -b /diego-nock-mock

```

##### How to test?
```bash
curl http://testmyapi-test.apigee.net/diego-nock-mock

{"_id":"123ABC","_rev":"946B7D1C","username":"dzuluaga","email":"dzuluaga@apigee.com"}
```

#####References
- For more ideas on this topic [Mocking API Requests in Node tests](http://javascriptplayground.com/blog/2013/08/mocking-web-requests/).
- [Nock on NPM](https://www.npmjs.com/package/nock)