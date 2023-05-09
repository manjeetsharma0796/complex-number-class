class Real {
  #real
  constructor(real) {
    this.#real = real;
  } 

  add(other) {
    const sum = this.#real + other.#real;
    return new Real(sum);
  }

  value() {
    return this.#real;
  }
};

exports.Real = Real;
