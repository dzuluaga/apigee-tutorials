'use strict';

var grunt_common = require('../libs/apigee-grunt-common.js');

module.exports = function(grunt) {
	grunt.registerTask('getAllApiRevisions', 'Retrieve all API revisions', function() {
		var apiRevisions = function(error, response, body) {
			grunt.log.writeln(response.statusCode)			
			grunt.log.writeln(body);
			done();
		}
		var done = this.async();
		grunt_common.getAllApiRevisions(grunt.config.get('apigee_profiles'), apiRevisions, grunt.option.flags().indexOf('--curl')!= -1)
	});
};
