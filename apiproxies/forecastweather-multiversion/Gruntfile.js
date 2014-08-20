module.exports = function(grunt) {
	var apigee_conf = require('./apigee-config.js')
	require('load-grunt-tasks')(grunt);
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		apigee_profiles : apigee_conf.profiles(grunt),//{
			clean: ["target"],
			mkdir: {
				all: {
					options: {
						create: ['target']
					},
				},
			},
			copy: {
				main: {
					src: 'apiproxy/**',
					dest: 'target/',
				},
			},
		// make a zipfile
		compress: {
			main: {
				options: {
					mode : 'zip',
					archive: function(){
						var ap = grunt.config.get("apigee_profiles")
						return 'target/' + ap[ap.env].apiproxy + ".zip"
					}
				},
				files: [
				{expand: true, cwd: 'target/apiproxy/', src: ['**'], dest: 'apiproxy/' }, // makes all src relative to cwd
				]
			}
		},
		// task for configuration management: search and replace elements within XML files  
		xmlpoke: apigee_conf.config(apigee_conf.profiles(grunt).env),
	    // Configure a mochaTest task
	    mochaTest: {
	    	test: {
	    		options: {
	    			reporter: 'spec',
	    			timeout : 5000	    
	    		},
	    		src: ['tests/**.js']
	    	}
	    }
	})

	grunt.registerTask('buildApiBundle', 'Build zip without importing it to Edge', ['clean', 'mkdir','copy', 'xmlpoke','compress']);

	// Default task(s).
	//delete and then import revision keeping same id
	grunt.registerTask('default', [ 'buildApiBundle',/*'force:on',*/ 'getDeployedApiRevisions', 'undeployApiRevision',
		'deleteApiRevision', /*'force:restore',*/ 'importApiBundle', 'deployApiRevision', 'executeTests']);

	grunt.loadTasks('tasks');
	if(grunt.option.flags().indexOf('--help') == -1 && !apigee_conf.profiles(grunt).env)
		grunt.fail.fatal('Invalid environment flag --env={env}. Provide environment as argument, see apigee_profiles in Grunfile.js.')
};