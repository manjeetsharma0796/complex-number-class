const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {Complex} = require('../src/complex.js');

describe('complex', function() {
  describe('toString', function() {
    const a = new Complex(1, 2);
    it('Should display complex number', function() {
      deepStrictEqual(a.toString(), '1 + 2i')
    });
  });
});
