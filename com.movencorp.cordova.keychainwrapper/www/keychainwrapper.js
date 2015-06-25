var exec = require('cordova/exec');

var keychain = {
  addKeyChainItem: function (key, value, callback) {
    exec(callback, callback, "keychainwrapper", [key, value])
  },
  
};

module.exports = keychain;
