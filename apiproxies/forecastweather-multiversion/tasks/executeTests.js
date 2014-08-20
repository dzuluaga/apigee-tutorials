'use strict';

module.exports = function(grunt) {
	grunt.registerTask('executeTests', 'execute tests when flag --skip-tests is absent.', function() {
		if(grunt.option.flags().indexOf('--skip-tests') == -1)
			grunt.task.run('mochaTest');
		else
			grunt.fail.warn('tests skipped. Remove --skip-tests to execute tests.');
	});
};
