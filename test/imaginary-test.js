const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {Imaginary} = require('../src/imaginary.js');

describe('imaginary', function() {
  describe('value', function() {
    it('Should display imaginary number', function() {
      const imaginaryNum1 = new Imaginary(2);
      deepStrictEqual(imaginaryNum1.value(), 2);
    });
  });

  describe('add', function() {
    it('Should add imaginary number', function() {
      const imaginaryNum1 = new Imaginary(2);
      const imaginaryNum2 = new Imaginary(3);
      const result = imaginaryNum1.add(imaginaryNum2);

      deepStrictEqual(result.value(), 5);
    });
  });
});

