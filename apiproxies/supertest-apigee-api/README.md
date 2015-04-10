supertest-apigee-api
====================

This API leverages SuperTest to run functional/integration tests against weather API.

##### How to deploy
This API leverages Apigee Deploy Grunt Plugin. For more information how to leverage this wonderful Plugin :-D, [please check here](https://github.com/apigeecs/apigee-deploy-grunt-plugin)

```bash
$ grunt --env=test --username=$ae_username --password=$ae_password
```

##### How to Run Tests

```bash
$ grunt mochaTest --env=test --username=$ae_username --password=$ae_password
```

After running test, the execution will provide the following results:
```
  GET /supertest-apigee-api/apigee/forecastrss?w=2502265
    ✓ respond with xml (619ms)

  Check weather in cities
    ✓ you should be able to get forecast weather for Sunnyvale from this API Proxy. (710ms)

  Check weather in cities
    ✓ you should be able to retrieve image with content-type header image/jpg. (352ms)

  3 passing (2s)
```

##### Why we chose SuperTest?
Note that syntax of SuperTest is pretty compact and closer to BDD (Behavior Driven Development Script). However, there's no need of the "fat" of writing BDD Specifications.

```javascript
describe('GET /supertest-apigee-api/apigee/forecastrss?w=2502265', function(){
  "use strict"
  it('respond with xml', function(done){
    request('https://testmyapi-test.apigee.net')
      .get('/supertest-apigee-api/apigee/forecastrss?w=2502265')
      .set('Accept', 'application/json')
      .expect('Content-Type', /xml/)
      .expect(200, done);
  })
})

  describe('Check weather in cities', function() {
    "use strict"
    it('you should be able to get forecast weather for Sunnyvale from this API Proxy.', function(done) {
      request('https://testmyapi-test.apigee.net')
        .get('/supertest-apigee-api/apigee/forecastrss?w=2502265')
        .set('Accept', 'application/json')
        .expect('Content-Type', /xml/)
        .expect(/Sunnyvale/)
        .expect(200, done);
      });
    });

  describe('Check weather in cities', function() {
    "use strict"
    it('you should be able to retrieve image with content-type header image/jpg.', function(done) {
      request('https://testmyapi-test.apigee.net/supertest-apigee-api/images')
        .get('/tree.jpg')
        .expect('Content-Type', /jpeg/)
        .expect(200, done);
      });
    });

```