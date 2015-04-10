//globals describe:true, it:true, expect:true, before:true, beforeEach:true, after:true, afterEach:true*/
// jshint ignore: start
/*jslint node: true */
/*eslint no-unused-vars:0 */

var grunt = require('grunt');
//var testDataFilename = grunt.template.process("<%= apigee_profiles[grunt.option('env')].apiproxy + '-' + grunt.option('env') + '-data' %>");
var async = require('async')
var chai = require('chai')
var assert = require('chai').assert
var expect = require('chai').expect
var request = require('supertest');

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
