/*jslint node: true */

module.exports = function(grunt) {
	var apigee_conf = require('./apigee-config.js')
	var helper = require('./libs/helper-functions.js');
	var searchNReplace = require('./conf/search-and-replace-files.js');
	//var apigee_common = require('./libs/apigee-grunt-common.js');

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
					files : [{
						src: 'apiproxy/**',
						dest: 'target/',
					},
					{
						expand : true,
						src: './node/*',
						dest: './target/apiproxy/resources/node/', filter: 'isFile', flatten: true
					},
					]
				}
			},
		// make a zipfile
		compress: {
			node_modules: helper.setNodeResources({
									mode : 'zip',
									archive: './target/apiproxy/resources/node/node_modules.zip'
								}, [
								{expand: true, cwd: './node/node_modules/', src: ['**'], dest: 'node_modules/' } // makes all src relative to cwd
								]),
			node_public: helper.setNodeResources({
								mode : 'zip',
								archive: './target/apiproxy/resources/node/public.zip'
							},[
								{expand: true, cwd: './node/public/', src: ['**'], dest: 'public/' }, // makes all src relative to cwd
							]),

			node_resources: helper.setNodeResources({
								mode : 'zip',
								archive: './target/apiproxy/resources/node/resources.zip'
							},[
								{expand: true, cwd: './node/resources/', src: ['**'], dest: 'resources/' }, // makes all src relative to cwd
							]),
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
	    },
	    jshint: {
		    options: { //see options reference http://www.jshint.com/docs/options/
		    	curly: true,
		    	eqeqeq: true,
		    	eqnull: true,
		    	browser: true,
		    	asi : true,
		    	debug : true,
		    	undef : true,
		    	unused : true,
		    	maxcomplexity : 5,
		    	reporter: require('jshint-stylish')
		    },
		    all: ['Gruntfile.js', 'apiproxy/**/*.js', 'tests/**/*.js', 'tasks/*.js']
		},
	    eslint: {                               // task
	    	options: {
	            config: 'conf/eslint.json',     // custom config
	            rulesdir: ['conf/rules']        // custom rules
	        },
	        target: ['Gruntfile.js', 'apiproxy/**/*.js', 'tests/**/*.js', 'tasks/*.js']                 // array of files
	    },
		'string-replace': {
			dist : searchNReplace.searchAndReplaceFiles(apigee_conf.profiles(grunt).env)
		},
	})

grunt.registerTask('buildApiBundle', 'Build zip without importing it to Edge', ['jshint', 'eslint', 'clean', 'mkdir','copy', 'xmlpoke', 'string-replace','compress']);

	// Default task(s).
	//delete and then import revision keeping same id
	grunt.registerTask('default', [ 'buildApiBundle', 'getDeployedApiRevisions', 'undeployApiRevision',
		'deleteApiRevision', 'importApiBundle', 'deployApiRevision', 'executeTests']);

	grunt.loadTasks('tasks');
	if(grunt.option.flags().indexOf('--help') === -1 && !apigee_conf.profiles(grunt).env) {
		grunt.fail.fatal('Invalid environment flag --env={env}. Provide environment as argument, see apigee_profiles in Grunfile.js.')
	}
};