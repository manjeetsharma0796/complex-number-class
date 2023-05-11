const {Real} = require('./real.js');

class Imaginary {
  #imaginary

  constructor(number) {
    this.#imaginary = number;
  }; 

  add(other) {
    const sum = this.#imaginary + other.getImaginary();
    return new Imaginary(sum);
  };

  subtract(other) {
    const difference = this.#imaginary - other.getImaginary();
    return new Imaginary(difference);
  };

  multiplyImaginary(other) {
    const product = this.#imaginary * other.getImaginary();
    return new Real(-product);
  };

  multiplyReal(other) {
    const product = this.#imaginary * other.getReal();
    return new Imaginary(product);
  }

  getImaginary() {
    return this.#imaginary;
  };
};

exports.Imaginary = Imaginary;