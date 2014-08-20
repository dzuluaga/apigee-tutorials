exports.profiles = function(grunt){
	return	{
			env : grunt.option('env'),     // replace with environment
			'test' : {
				apiproxy : 'forecastweather-multiversion',
					org : 'testmyapi', // replace with organization
					env : 'test',     // replace with environment
					url_mgmt : 'https://api.enterprise.apigee.com',  // for cloud environments, leave as is
					username : grunt.option('username') || process.env.ae_username, // pass credentials as arguments as grunt task --username=$ae_username --password=$ae_password
					password : grunt.option('password') || process.env.ae_password, // use ae_username and ae_password are defined as environment variables and no arguments are passed
					revision : grunt.option('revision'), // provide revision to be undeployed by passing argument as --revision=X
					override : grunt.option('override') || false,
					delay : grunt.option('delay') || 0
				},
				'prod' : {
					apiproxy : 'forecastweather-multiversion',
					org : 'testmyapi', // replace with organization
					env : 'prod',     // replace with environment
					url_mgmt : 'https://api.enterprise.apigee.com',  // for cloud environments, leave as is
					username : grunt.option('username') || process.env.ae_username, // pass credentials as arguments as grunt task --username=$ae_username --password=$ae_password
					password : grunt.option('password') || process.env.ae_password, // use ae_username and ae_password are defined as environment variables and no arguments are passed
					revision : grunt.option('revision'), // provide revision to be undeployed by passing argument as --revision=X
					override : grunt.option('override') || false,
					delay : grunt.option('delay') || 0
				}
			}
}

exports.config = function(env){
	config = { "test" : [
		{
			"options": {
				"xpath": "//TargetEndpoint/HTTPTargetConnection/URL",
				"value": "https://weather.yahooapis.com"
			},
			"files": {
				"target/apiproxy/targets/default.xml": "apiproxy/targets/default.xml"
			}
		}          
		],
	 "prod" : [
		{
			"options": {
				"xpath": "//TargetEndpoint/HTTPTargetConnection/URL",
				"value": "https://weather.yahooapis.com"
			},
			"files": {
				"target/apiproxy/targets/default.xml" : "apiproxy/targets/default.xml"
			}
		}      
		]}
		return config[env]		
}