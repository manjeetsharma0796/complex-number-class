class Complex {
  #real
  #imaginary

  constructor (real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  add(other) {
    const real = this.#real + other.#real;
    const imaginary = this.#imaginary + other.#imaginary;

    return new Complex(real, imaginary);
  };

  subtract(other) {
    const real = this.#real - other.#real;
    const imaginary = this.#imaginary - other.#imaginary;

    return new Complex(real, imaginary);
  };

  multiply(other) {
    const real = (this.#real * other.#real) - (this.#imaginary * other.#imaginary);
    const imaginary = (this.#real * other.#imaginary) + (this.#imaginary * other.#real);

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
