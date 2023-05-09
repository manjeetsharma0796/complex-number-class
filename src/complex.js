const {Real} = require('./real.js');
const {Imaginary} = require('./imaginary.js');


class Complex {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  add(other) {
    const real = new Real(this.#real.value() + other.#real.value());
    const imaginary = new Imaginary(this.#imaginary.value() + other.#imaginary.value());

    return new Complex(real, imaginary);
  };

  subtract(other) {
    const real = new Real(this.#real.value() - other.#real.value());
    const imaginary = new Imaginary(this.#imaginary.value() - other.#imaginary.value());

    return new Complex(real, imaginary);
  };

  multiply(other) {
    const real = new Real((this.#real.value() * other.#real.value()) - (this.#imaginary.value() * other.#imaginary.value()));
    const imaginary = new Imaginary((this.#real.value() * other.#imaginary.value()) + (this.#imaginary.value() * other.#real.value()));

    return new Complex(real, imaginary);
  }

  #decideSymbol() {
    return this.#imaginary.value() < 0 ? '-' : '+';
  }

  toString() {
    const imaginaryAbsValue = Math.abs(this.#imaginary.value());
    const symbol = this.#decideSymbol();

    return `${this.#real.value()} ${symbol} ${imaginaryAbsValue}i`;
  };
};

exports.Complex = Complex;
