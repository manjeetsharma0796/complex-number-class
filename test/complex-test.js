const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {Complex} = require('../src/complex.js');
const {Real} = require('../src/real.js');
const {Imaginary} = require('../src/imaginary.js');

describe('complex', function() {
  describe('toString', function() {
    it('Should display complex number', function() {
      const real = new Real(1);
      const imaginary = new Imaginary(2);
      const num = new Complex(real, imaginary);

      deepStrictEqual(num.toString(), '1 + 2i');
    });

    it('Should display complex number with negative imaginary number', function() {
      const real = new Real(1);
      const imaginary = new Imaginary(-2);
      const num = new Complex(real, imaginary);

      deepStrictEqual(num.toString(), '1 - 2i');
    });
  });

  describe('add', function() {
    it('Should add two complex number', function() {
      const real1 = new Real(1);
      const imaginary1 = new Imaginary(2);
      const real2 = new Real(2);
      const imaginary2 = new Imaginary(3);

      const num1 = new Complex(real1, imaginary1);
      const num2 = new Complex(real2, imaginary2);
      const result = num1.add(num2);

      deepStrictEqual(result.toString(), '3 + 5i');
    })

    it('Should add two complex number with negative imaginary', function() {
      const real1 = new Real(1);
      const imaginary1 = new Imaginary(2);
      const real2 = new Real(2);
      const imaginary2 = new Imaginary(-3);

      const num1 = new Complex(real1, imaginary1);
      const num2 = new Complex(real2, imaginary2);
      const result = num1.add(num2);

      deepStrictEqual(result.toString(), '3 - 1i');
    })
  })

  describe('subtract', function() {
    it('Should subtract two complex number', function() {
      const real1 = new Real(3);
      const imaginary1 = new Imaginary(2);
      const real2 = new Real(1);
      const imaginary2 = new Imaginary(1);

      const num1 = new Complex(real1, imaginary1);
      const num2 = new Complex(real2, imaginary2);
      const result = num1.subtract(num2);

      deepStrictEqual(result.toString(), '2 + 1i');
    });

    it('Should subtract two complex number with a negative imaginary', function() {
      const real1 = new Real(3);
      const imaginary1 = new Imaginary(2);
      const real2 = new Real(1);
      const imaginary2 = new Imaginary(3);

      const num1 = new Complex(real1, imaginary1);
      const num2 = new Complex(real2, imaginary2);
      const result = num1.subtract(num2);

      deepStrictEqual(result.toString(), '2 - 1i');
    });
  });

  describe('multiply', function() {
    it('Should multiply two complex number', function() {
      const real1 = new Real(1);
      const imaginary1 = new Imaginary(2);
      const real2 = new Real(2);
      const imaginary2 = new Imaginary(3);

      const num1 = new Complex(real1, imaginary1);
      const num2 = new Complex(real2, imaginary2);
      const result = num1.multiply(num2);

      deepStrictEqual(result.toString(), '-4 + 7i');
    });
  });
});
