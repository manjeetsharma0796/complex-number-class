const { Real } = require('./real.js');
const { Imaginary } = require('./imaginary.js');

class Complex {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  add(other) {
    const real = this.#real.add(other.#real);
    const imaginary = this.#imaginary.add(other.#imaginary);

    return new Complex(real, imaginary);
  };

  subtract(other) {
    const real = this.#real.subtract(other.#real);
    const imaginary = this.#imaginary.subtract(other.#imaginary);

    return new Complex(real, imaginary);
  };

  multiply(other) {
    const realWithReal = this.#real.multiply(other.#real)
    const imaginaryWithImaginary = this.#imaginary.multiplyImaginary(other.#imaginary);
    const realWithImaginary = other.#imaginary.multiplyReal(this.#real);
    const imaginaryWithReal = this.#imaginary.multiplyReal(other.#real);

    const real = realWithReal.add(imaginaryWithImaginary);
    const imaginary = realWithImaginary.add(imaginaryWithReal);

    return new Complex(real, imaginary);
  }

  #getSymbol() {
    return this.#imaginary.getImaginary() < 0 ? '-' : '+';
  };

  toString() {
    const imaginaryAbsValue = Math.abs(this.#imaginary.getImaginary());
    const symbol = this.#getSymbol();

    return `${this.#real.getReal()} ${symbol} ${imaginaryAbsValue}i`;
  };
};

exports.Complex = Complex;