const {Real} = require('./real.js');
const {Imaginary} = require('./imaginary.js');


class Complex {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real.value();
    this.#imaginary = imaginary.value();
  };

  add(other) {
    const real = new Real(this.#real + other.#real);
    const imaginary = new Imaginary(this.#imaginary + other.#imaginary);

    return new Complex(real, imaginary);
  };

  subtract(other) {
    const real = new Real(this.#real - other.#real);
    const imaginary = new Imaginary(this.#imaginary - other.#imaginary);

    return new Complex(real, imaginary);
  };

  multiply(other) {
    const real = new Real((this.#real * other.#real) - (this.#imaginary * other.#imaginary));
    const imaginary = new Imaginary((this.#real * other.#imaginary) + (this.#imaginary * other.#real));

    return new Complex(real, imaginary);
  }

  #decideSymbol() {
    return this.#imaginary < 0 ? '-' : '+';
  }

  toString() {
    const imaginaryAbsValue = Math.abs(this.#imaginary);
    const symbol = this.#decideSymbol();

    return `${this.#real} ${symbol} ${imaginaryAbsValue}i`;
  };
};

exports.Complex = Complex;
