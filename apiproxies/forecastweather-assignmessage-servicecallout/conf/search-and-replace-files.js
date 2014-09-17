exports.searchAndReplaceFiles = function(env){
		var config = {
		  test: {
		    files: [{
		      expand: true,
		      cwd: 'target/',
		      src: '**/*',
		      dest: 'target/'
		    }],
		    options: {
		      replacements: [{
		        pattern: 'VALUE TO BE REPLACED #1',
		        replacement: '<%= grunt.template.today() %>_test'
		      },
			  {
		        pattern: 'VALUE TO BE REPLACED #2',
		        replacement: 'REPLACE VALUE #2_TEST'
		      }
		      ]
		    }
		  },
		 prod: {
		    files: [{
		      expand: true,
		      cwd: 'target/',
		      src: '**/*',
		      dest: 'target/'
		    }],
		    options: {
		      replacements: [{
		        pattern: 'VALUE TO BE REPLACED #1',
		        replacement: '<%= grunt.template.today() %>_PROD'
		      },
			  {
		        pattern: 'VALUE TO BE REPLACED #2',
		        replacement: 'REPLACE VALUE #2_PROD'
		      }
		      ]
		    }
		  }
		}
		if(!config[env])console.log('Target '+ env +' does not exist under conf/search-and-replace-files.js')
		return(config[env])
	}