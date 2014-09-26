/*globals describe:true, it:true, expect:true*/
/*jslint node: true */

//var http = require('http')
var chai = require('chai')
var assert = require('chai').assert
var expect = require('chai').expect
var request = require('request'), chaiHttp = require('chai-http');

chai.use(chaiHttp);


  describe('ForecastWeather Public API Test', function() {

    var options = {}

    it('you should be able to get forecast weather for Los Angeles, CA (200 OK) from this API Proxy.', function(done) {
       options = {
          url: 'https://testmyapi-test.apigee.net/service-callout-variable',
            headers: {
                'User-Agent': 'request'
            }
       }

        request(options, function (error, response, body) {
            expect(body).to.contain('Los Angeles')
            assert.equal(200, response.statusCode)
            done()
        })

    })

  });
