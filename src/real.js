class Real {
  #real
  constructor(real) {
    this.#real = real;
  } 

  add(other) {
    const sum = this.#real + other.#real;
    return new Real(sum);
  }

  subtract(other) {
    const difference = this.#real - other.#real;
    return new Real(difference);
  }

  multiply(other) {
    const product = this.#real * other.#real;
    return new Real(product);
  }

  value() {
    return this.#real;
  }
};

exports.Real = Real;
