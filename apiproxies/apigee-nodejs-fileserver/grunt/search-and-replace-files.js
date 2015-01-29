exports.searchAndReplaceFiles = function(env, grunt){
	var config = {
		test: {
			files: [{
				cwd: 'target/',
				src: ['**/*.js','**/*.xml','!node/node_modules/**/*.js'],
				dest: 'target/',
				expand: true,
			}],
			options: {
				replacements: [
				{
					pattern: 'VALUE TO BE REPLACED #1',
					replacement: '<%= grunt.template.today() %>_test'
				},
				{
					pattern: 'VALUE TO BE REPLACED #2',
					replacement: 'REPLACE VALUE #2_TEST'
				},
		      ]
		  }
		},
		prod: {
			files: [{
				cwd: 'target/',
				src: ['**/*.js','**/*.xml','!node/node_modules/**/*.js'],
				dest: 'target/',
				expand: true,
			}],
			options: {
				replacements: [{
					pattern: 'VALUE TO BE REPLACED #1',
					replacement: '<%= grunt.template.today() %>_test'
				},
				{
					pattern: 'VALUE TO BE REPLACED #2',
					replacement: 'REPLACE VALUE #2_TEST'
				},
		      ]
		  }
		},
	}
	if(!config[env])grunt.fail.fatal('Environment '+ env +' does not exist under grunt/search-and-replace-files.js')
		return(config[env])
}