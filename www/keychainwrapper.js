(function(window){
  var cordova = require('cordova');

  var keychain = {
    storeValue: function(key, value, callback){

    },

    getValue: function(key, callback){

    }
  };

  cordova.addConstructor(function(){
    keychain.init();
    window.keychain = keychain;
  });
  
})(window);
