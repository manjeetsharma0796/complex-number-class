class Imaginary {
  #imaginary
  constructor(imaginary) {
    this.#imaginary = imaginary;
  } 

  add(other) {
    const sum = this.#imaginary + other.#imaginary;
    return new Imaginary(sum);
  }

  value() {
    return this.#imaginary;
  }
}

exports.Imaginary = Imaginary;
