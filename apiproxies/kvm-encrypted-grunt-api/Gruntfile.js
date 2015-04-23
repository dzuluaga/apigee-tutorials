/*jslint node: true */
/*jshint unused:false*/
/*eslint no-unused-vars:0 */

/************************************************************************
The MIT License (MIT)

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**************************************************************************/

module.exports = function(grunt) {
	"use strict";
	var apigee_conf = require('./grunt/apigee-config.js')
	var helper = require('./grunt/lib/helper-functions.js');
	var searchNReplace = require('./grunt/search-and-replace-files.js');
	require('time-grunt')(grunt);
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		apigee_profiles : apigee_conf.profiles(grunt),//{
	    availabletasks: {
	        tasks: {}
	    },
		clean: {
			build :["target"],
			kvm : 'config/kvm/**/*json'
		},
		mkdir: {
			all: {
				options: {
					create: ['target', 'target/apiproxy/resources/java/', 'target/java/bin']
				},
			},
		},
		copy: {
			"java-jar" : {
					src: ['java/lib/*.jar', '!java/lib/expressions-1.0.0.jar', '!java/lib/message-flow-1.0.0.jar'],
					dest: 'target/apiproxy/resources/java/', filter: 'isFile', flatten: true, expand : true,
			},
			apiproxy: {
						src: 'apiproxy/**',
						dest: './target/',
			},
			"node-target": { // copy node folder to target for search and replace
						src: './node/**',
						dest: './target/'
			},
			"node-js-root": { //copy app.js and package.json
							expand : true,
							src: './target/node/*',
							dest: './target/apiproxy/resources/node/', filter: 'isFile', flatten: true
				},
		},
	// make a zipfile
		compress: {
			/** No longer required as importApiBundle will install npm modules directly via NPM API **/
			/*
				"node-modules": helper.setNodeResources('./target/node/node_modules/' ,{
										mode : 'zip',
										archive: './target/apiproxy/resources/node/node_modules.zip'
									}, [
									{expand: true, cwd: './target/node/node_modules/', src: ['**'], dest: 'node_modules/' } // makes all src relative to cwd
									]),
			*/
/*			"node-public": helper.setNodeResources('./target/node/public/', {
								mode : 'zip',
								archive: './target/apiproxy/resources/node/public.zip'
							},[
								{expand: true, cwd: './target/node/public/', src: ['**'], dest: 'public/' }, // makes all src relative to cwd
							]),

			"node-resources": helper.setNodeResources('./target/node/resources/', {
								mode : 'zip',
								archive: './target/apiproxy/resources/node/resources.zip'
							},[
								{expand: true, cwd: './target/node/resources/', src: ['**'], dest: 'resources/' }, // makes all src relative to cwd
							]),*/
			main: {
				options: {
					mode : 'zip',
					archive: "target/<%= apigee_profiles[grunt.option('env')].apiproxy %>.zip"
				},
				files: [
					{expand: true, cwd: 'target/apiproxy/', src: ['**'], dest: 'apiproxy/' }, // makes all src relative to cwd
					]
				}
		},
		// task for configuration management: search and replace elements within XML files
		xmlpoke: apigee_conf.xmlconfig(grunt.option('env'), grunt),
	    // Configure a mochaTest task
	    mochaTest: {
	    	test: {
	    		options: {
	    			reporter: 'spec', //supported reporters: tap
	    			timeout : 5000,
	    			quiet: false // Optionally suppress output to standard out (defaults to false)
	    		},
	    		src: ["tests/<%= apigee_profiles[grunt.option('env')].apiproxy %>**.js"]
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
	            config: 'grunt/conf/eslint.json',     // custom config
	            rulesdir: ['grunt/conf/rules']        // custom rules
	        },
	        target: ['Gruntfile.js', 'target/apiproxy/**/*.js', 'tests/**/*.js', 'tasks/*.js']                 // array of files
	    },
		'string-replace': {
			dist : searchNReplace.searchAndReplaceFiles(grunt.option('env'), grunt)
		},
	    shell: {
	        options: {
	            stderr: false,
	            failOnError : true
	        },
	        // Remove comments to enable JavaCallout Policy
	        // javaCompile: {
	        //     command: 'javac -sourcepath ./java/src/**/*.java -d ./target/java/bin -cp java/lib/expressions-1.0.0.jar:java/lib/message-flow-1.0.0.jar:jar:java/lib/message-flow-1.0.1.jar java/src/com/example/SimpleJavaCallout.java',
	        // },
	        // javaJar : {
	        //     command: 'jar cvf target/apiproxy/resources/java/javaCallouts.jar -C target/java/bin .',
	        // },

	        //run jmeter tests from Grunt
/*	        "run_jmeter_tests" : {
	             command: 'mvn install -P <%= grunt.option("env") %>',
	        },*/
	    },
	    notify: {
	    	task_name: {
	    		options: {
	        	// Task-specific options go here.
	        	}
		    },
		    ApiDeployed: {
		    	options: {
		    		message: 'Deployment is ready!'
		    	}
		    }
  		},
        complexity: {
            generic: {
                src: ['target/apiproxy/**/*.js', 'tests/**/*.js', 'tasks/*.js'],
                exclude: ['doNotTest.js'],
                options: {
                    breakOnErrors: true,
                    jsLintXML: 'report.xml',         // create XML JSLint-like report
                    checkstyleXML: 'checkstyle.xml', // create checkstyle report
                    errorsOnly: false,               // show only maintainability errors
                    cyclomatic: [3, 7, 12],          // or optionally a single value, like 3
                    halstead: [8, 13, 20],           // or optionally a single value, like 8
                    maintainability: 100,
                    hideComplexFunctions: false,      // only display maintainability
                    broadcast: false                 // broadcast data over event-bus
                }
            }
        },

		// Configure this task to support KVM data config migrations
		"apigee_kvm": {
		  "testmyapi-test" : {
		    options: {
		      type: "env"
		    },
		    files: [{src: ['config/kvm/testmyapi/testmyapi-test/*.json']},
		    ]
		  },
		  "testmyapi-prod" : {
		    options: {
		      type: "env"
		    },
		    files: [{src: ['config/kvm/testmyapi/testmyapi-prod/*.json']},
		    ]
		  },
		  "testmyapi" : {
		    options: {
		      type: "org"
		    },
		    files: [{src: ['config/kvm/testmyapi/*.json']},
		    ]
		  }
		},
	crypt:{
	  files:[
	    {
	      dir:'config/kvm',                       // root dir of files to encrypt, or dest dir of files to decrypt
	      include:'**/*.json',                    // pattern to include files
	      encryptedExtension:'.encrypted',
	      decryptedExtension:'.decrypted',
	    }
	  ],
	  options:{
	    key: grunt.cli.options.key //|| 'somekey'  // key used to encrypt / decrypt
	                                            	// for security purpose, prefer to pass it through command line arguments
	  }
	}
	})

require('load-grunt-tasks')(grunt);

// importKVM at Organization and Environment level. See apigee_kvm task above
grunt.registerTask('importKVMs', ['decrypt', 'apigee_kvm:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option("env"), 'apigee_kvm:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org, 'clean:kvm']);

grunt.registerTask('buildApiBundle', 'Build zip without importing it to Edge', ['clean:build', 'saveGitRevision', 'mkdir','copy', 'xmlpoke', 'string-replace', 'jshint', 'eslint', 'complexity', /*'shell'*/ 'compress']);
  //1. import revision bumping revision id
  grunt.registerTask('IMPORT_DEPLOY_BUMP_REVISION', [ 'buildApiBundle', 'getDeployedApiRevisions', 'undeployApiRevision',
    'importApiBundle', 'installNpmRevision', 'deployApiRevision', 'executeTests', /*'shell:run_jmeter_tests',*/ 'notify:ApiDeployed']);

  //2. update revision keeping same id
  grunt.registerTask('UPDATE_CURRENT_REVISION', [ 'buildApiBundle', 'getDeployedApiRevisions', 'undeployApiRevision',
    'updateApiRevision', 'installNpmRevision', 'deployApiRevision', 'executeTests', 'notify:ApiDeployed']);

  //3. import revision and run seamless deployment
  grunt.registerTask('DEPLOY_IMPORT_BUMP_SEAMLESS_REVISION', [ 'buildApiBundle', 'getDeployedApiRevisions', /*'undeployApiRevision',*/
    'importApiBundle',/* 'installNpmRevision',*/ 'deployApiRevision', 'executeTests', /*'shell:run_jmeter_tests',*/ 'notify:ApiDeployed']);

  //set to DEPLOY_IMPORT_BUMP_SEAMLESS_REVISION by default. This is critical for production for seamless deploymen and not lose traffic
  grunt.registerTask('default', [ 'importKVMs', 'DEPLOY_IMPORT_BUMP_SEAMLESS_REVISION' ]);

	grunt.loadTasks('grunt/tasks');
	if(grunt.option.flags().indexOf('--help') === -1 && !grunt.option('env')) {
		grunt.fail.fatal('Invalid environment --env={env}.')
	}
};
