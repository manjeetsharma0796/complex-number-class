const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {Complex} = require('../src/complex.js');

describe('complex', function() {
  describe('toString', function() {
    it('Should display complex number', function() {
      const num = new Complex(1, 2);
      deepStrictEqual(num.toString(), '1 + 2i');
    });

    it('Should display complex number with negative imaginary number', function() {
      const num = new Complex(1, -2);
      deepStrictEqual(num.toString(), '1 - 2i');
    });
  });

  describe('add', function() {
    it('Should add two complex number', function() {
      const num1 = new Complex(1, 2);
      const num2 = new Complex(2, 3);
      const result = num1.add(num2);

      deepStrictEqual(result.toString(), '3 + 5i');
    })

    it('Should add two complex number with negative imaginary', function() {
      const num1 = new Complex(1, 2);
      const num2 = new Complex(2, -3);
      const result = num1.add(num2);

      deepStrictEqual(result.toString(), '3 - 1i');
    })
  })

  describe('subtract', function() {
    it('Should subtract two complex number', function() {
      const num1 = new Complex(3, 2);
      const num2 = new Complex(1, 1);
      const result = num1.subtract(num2);

      deepStrictEqual(result.toString(), '2 + 1i');
    });
  });
});
