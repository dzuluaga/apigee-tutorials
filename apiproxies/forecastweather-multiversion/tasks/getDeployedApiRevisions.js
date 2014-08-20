'use strict';

var grunt_common = require('../libs/apigee-grunt-common.js');

module.exports = function(grunt) {
	grunt.registerTask('getDeployedApiRevisions', 'Retrieve Last API revision deployed', function() {
    var apiRevisions = function(error, response, body) {
        if (!error && (response.statusCode == 200 || response.statusCode == 400)) {
            var apiDeployedrevisions = JSON.parse(body);
            grunt.option('revisions_deployed', apiDeployedrevisions);
        }
        grunt.log.debug(response.statusCode)     
        grunt.log.debug(JSON.stringify(response.headers))  
        grunt.log.debug(body);
        done();
    }
		var done = this.async();
    grunt_common.getDeployedApiRevisions(grunt.config.get('apigee_profiles'), apiRevisions, grunt.option.flags().indexOf('--curl')!= -1)
	});
};
