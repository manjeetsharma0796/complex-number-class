const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {Real} = require('../src/real.js');

describe('real', function() {
  describe('value', function() {
    it('Should display real number', function() {
      const realNum1 = new Real(2);
      deepStrictEqual(realNum1.value(), 2);
    });
  });

  describe('add', function() {
    it('Should add real number', function() {
      const realNum1 = new Real(2);
      const realNum2 = new Real(3);
      const result = realNum1.add(realNum2);

      deepStrictEqual(result.value(), 5);
    });
  });
});
