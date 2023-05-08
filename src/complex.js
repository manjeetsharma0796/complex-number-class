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

  #decideSymbol() {
    return this.#imaginary >= 0 ? '+' : '-';
  }

  toString() {
    return `${this.#real} ${this.#decideSymbol()} ${Math.abs(this.#imaginary)}i`;
  };
};

exports.Complex = Complex;
