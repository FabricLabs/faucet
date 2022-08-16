'use strict';

const assert = require('assert');
const Faucet = require('../services/bitfaucet');

describe('BitFaucet', function () {
  describe('Service', function () {
    it('is an instance of a function', function () {
      assert.equal(Faucet instanceof Function, true);
    });
  });
});
