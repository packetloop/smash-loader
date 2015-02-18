'use strict';

var assert = require('assert');

describe('basic', function () {
  it('should compile a Smash module', function () {
    var core = require('../!./fixtures/core.js');

    assert.equal('string', typeof(core.hello));
    assert.equal('world', core.hello);
  });
});
