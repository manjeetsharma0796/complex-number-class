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

  toString() {
    return `${this.#real} + ${this.#imaginary}i`;
  };
};

exports.Complex = Complex;
