const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {Real} = require('../src/real.js');

describe('real', function() {
  describe('value', function() {
    it('Should display real number', function() {
      const realNum1 = new Real(2);
      strictEqual(realNum1.getReal(), 2);
    });
  });

  describe('add', function() {
    it('Should add real number', function() {
      const realNum1 = new Real(2);
      const realNum2 = new Real(3);
      const result = realNum1.add(realNum2);

      strictEqual(result.getReal(), 5);
    });
  });

  describe('subtract', function() {
    it('Should subtract real number', function() {
      const realNum1 = new Real(2);
      const realNum2 = new Real(3);
      const result = realNum1.subtract(realNum2);

      strictEqual(result.getReal(), -1);
    });
  });

  describe('multiply', function() {
    it('Should multiply two real number', function() {
      const realNum1 = new Real(2);
      const realNum2 = new Real(3);
      const result = realNum1.multiply(realNum2);

      strictEqual(result.getReal(), 6);
    })
  })
});
