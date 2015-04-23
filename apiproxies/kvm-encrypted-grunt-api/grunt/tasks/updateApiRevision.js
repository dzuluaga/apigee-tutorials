/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');

module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('updateApiRevision', 'Update an API revision. e.g. grunt updateApiRevision:{revision_id}', function(revision) {
      var updateRevision = function(error, response, body){
        grunt.log.debug(response.statusCode)
        grunt.log.debug(body);
        done();
      }
      var revisionl = revision || (grunt.option('revisions_undeployed') && grunt.option('revisions_undeployed').revision);
      if(!revisionl) {
        grunt.log.warn('invalid revision. e.g. grunt updateApiRevision:{revision_id}');
      }else{
        var done = this.async();
        grunt_common.updateApiRevision(grunt.config.get('apigee_profiles'), revisionl, updateRevision, grunt.option.flags().indexOf('--curl') !== -1)
      }
  });
};
