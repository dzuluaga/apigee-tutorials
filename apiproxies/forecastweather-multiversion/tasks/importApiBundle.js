'use strict';

var grunt_common = require('../libs/apigee-grunt-common.js');

module.exports = function(grunt) {
	grunt.registerTask('importApiBundle', 'Import API bundle under a API proxy name', function() {
		var importedBundle = function(error, response, body) {
			if (!error && response.statusCode == 201) {
				var importBundleRes = JSON.parse(body);
				grunt.option('revision', importBundleRes.revision);
			}
			grunt.log.debug(response.statusCode)
			grunt.log.debug(body);
			done(error);
		}
		var done = this.async();
		grunt_common.importApiBundle(grunt.config.get('apigee_profiles'), importedBundle, grunt.option.flags().indexOf('--curl')!= -1)
	});
};
