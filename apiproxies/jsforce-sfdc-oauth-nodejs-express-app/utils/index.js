var apigee = require('apigee-access'),
    Promise = require('native-promise-only');

function get_vault_key(key, vault_name, scope) {
  var envVault = apigee.getVault(vault_name, scope);
  return new Promise(function(resolve, reject) {
    envVault.get(key, function(err, value) {
      if (err) {
        return reject(err);
      }
      return resolve(value);
    });
  });
}

module.exports = {
  get_vault_key: get_vault_key
};