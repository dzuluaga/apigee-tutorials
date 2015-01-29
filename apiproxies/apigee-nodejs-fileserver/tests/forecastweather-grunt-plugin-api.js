/*globals describe:true, it:true, expect:true, before:true, beforeEach:true, after:true, afterEach:true*/
/*jslint node: true */

var grunt = require('grunt');
var testDataFilename = grunt.template.process("<%= apigee_profiles[grunt.option('env')].apiproxy + '-' + grunt.option('env') + '-data' %>");
var async = require('async')
var chai = require('chai')
var assert = require('chai').assert
var expect = require('chai').expect
var request = require('request'), chaiHttp = require('chai-http');
var weatherData = require('./' + testDataFilename);

chai.use(chaiHttp);

describe('ForecastWeather Public API Test',function() {
  "use strict";
  before(function () {
    // get OAuth 2.0 token
    // console.log('initialize');
  });
  beforeEach(function () {
    //console.log('initialize each test');
  });

  describe('Check weather in cities', function() {
      async.each(weatherData.simpleWeatherArray() , function(cityData, callback) {
        it('you should be able to get forecast weather for ' + cityData.name + ' from this API Proxy.', function(done) {
           var options = {
                    url: cityData.url, //'https://testmyapi-test.apigee.net/weathergrunt/apigee/forecastrss?w=2502265',
                    headers: {
                      'User-Agent': 'request'
                    }
           }
            request(options, function (error, response, body) {
                expect(body).to.contain(cityData.name) //Sunnyvale, Madrid
                assert.equal(cityData.responseCode, response.statusCode)
                done()
              })
            })
        callback();
    });
  });

  describe('ForecastWeather Public API Test', function() {
    async.each(weatherData.simpleFormatArray(), function(cityData, callback){
        it('you should be able to get forecast weather for ' + cityData.name + ' from this API Proxy in ' + cityData.contentType, function(done) {
         var options = {
          url: cityData.url,//'https://testmyapi-test.apigee.net/weathergrunt/apigee/forecastrss?w=2502265',
          headers: {
            'User-Agent': 'request',
            'Accept' : cityData.contentType//'text/xml;charset=UTF-8'
          }
        }
        request(options, function (error, response, body) {
          expect(body).to.contain(cityData.name)
          assert.equal(cityData.responseCode, response.statusCode)
          expect(response).to.have.header('content-type', cityData.contentType);
          done()
        })
      })
      callback();
  });

  async.each(weatherData.nodeArray(),function(cityData, callback){
    it('you should be able to get forecast weather for ' + cityData.name + ' from this API Proxy via a Node.js Target', function(done) {
       var options = {
        url: cityData.url,
        headers: {
          'User-Agent': 'request'
        }
      }
      request(options, function (error, response, body) {
        expect(body).to.contain(cityData.contentAssertion)
        assert.equal(cityData.responseCode, response.statusCode)
        done()
      })
    })
    callback();
  })

  it('you should be able to retrieve image with content-type header image/jpg', function(done) {
    chai.request('https://testmyapi-test.apigee.net/weathergrunt/images')
    .get('/tree.jpg')
    .set('test', '123')
    .end(function (err, res) {
       expect(res).to.have.status(200);
       expect(res).to.have.header('content-type','image/jpeg');
       done();
    });
  })

  it('you should be able use oauth', function(done) {
   done()
  })
  //Disabled by default (JavaCallout Policy)
  /*    describe('you should be able to make a call to resource which executes a JavaCallout', function() {
        it('with a response "Payload set by a Java Callout"', function(done) {
          chai.request('https://testmyapi-test.apigee.net/weathergrunt')
            .get('/javacallout')
            .res(function (res) {
              //expect(res.content).to.contain('Weather for Cali')
              expect(res.text).to.contain('Payload set by a Java Callout')
              done();
            });
        })
})*/

  });
  after(function () {
      // teardown test
      //console.log('destroy');
  });
  afterEach(function () {
    //console.log('finalize each test');
  });
});

//pending test
describe('Array - pending test', function(){
  "use strict";
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present')
  })
})
