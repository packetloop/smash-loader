'use strict';


var loaderUtils = require('loader-utils');
var smash = require('smash');


module.exports = function () {
  var callback = this.async();
  var file = loaderUtils.getRemainingRequest(this);
  var code = [];

  smash([file])
    .on('data', function (text) {
      code.push(text);
    })
    .on('end', function () {
      callback(null, code.join('\n'));
    });
};
