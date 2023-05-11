const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {Imaginary} = require('../src/imaginary.js');
const {Real} = require('../src/real.js');

describe('imaginary', function() {
  describe('value', function() {
    it('Should display imaginary number', function() {
      const imaginaryNum1 = new Imaginary(2);
      strictEqual(imaginaryNum1.getImaginary(), 2);
    });
  });

  describe('add', function() {
    it('Should add imaginary number', function() {
      const imaginaryNum1 = new Imaginary(2);
      const imaginaryNum2 = new Imaginary(3);
      const result = imaginaryNum1.add(imaginaryNum2);

      strictEqual(result.getImaginary(), 5);
    });
  });

  describe('subtract', function() {
    it('Should subtract imaginary number', function() {
      const imaginaryNum1 = new Imaginary(2);
      const imaginaryNum2 = new Imaginary(3);
      const result = imaginaryNum1.subtract(imaginaryNum2);

      strictEqual(result.getImaginary(), -1);
    });
  });

  describe('multiplyImaginary', function() {
    it('Should multiply with imaginary number and give real number', function() {
      const imaginaryNum1 = new Imaginary(2);
      const imaginaryNum2 = new Imaginary(3);
      const result = imaginaryNum1.multiplyImaginary(imaginaryNum2);

      strictEqual(result.getReal(), -6);
    });
  });

  describe('multiplyReal', function() {
    it('Should multiply with real number and give imaginary number', function() {
      const imaginaryNum = new Imaginary(2);
      const realNum = new Real(3);
      const result = imaginaryNum.multiplyReal(realNum);

      strictEqual(result.getImaginary(), 6);
    });
  });
});