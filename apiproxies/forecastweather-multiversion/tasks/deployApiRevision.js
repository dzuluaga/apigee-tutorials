'use strict';

var grunt_common = require('../libs/apigee-grunt-common.js');

module.exports = function(grunt) {
	grunt.registerTask('deployApiRevision', 'Deploy an API revision. deployApiRevision:{revision_id}', function(revision) {
		var deployedRevision = function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var undeployResult = JSON.parse(body);
			}
			else{
				done(false)
			}
			grunt.log.debug(response.statusCode)
			grunt.log.debug(body);			
			done(error);
		}
		var revisionl = revision || grunt.option('revision');
		//core logic
		if(!revisionl){
			grunt.fail.fatal('invalid revision id. provide either argument as deployApiRevision:{revision_id}');
		}else{
			var done = this.async();
			grunt_common.deployApiRevision(grunt.config.get('apigee_profiles'), revisionl, deployedRevision, grunt.option.flags().indexOf('--curl')!= -1)
		}
	});
};
