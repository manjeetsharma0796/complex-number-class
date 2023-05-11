class Real {
  #real

  constructor(number) {
    this.#real = number;
  };

  add(other) {
    const sum = this.#real + other.getReal();
    return new Real(sum);
  };

  subtract(other) {
    const difference = this.#real - other.getReal();
    return new Real(difference);
  };

  multiply(other) {
    const product = this.#real * other.getReal();
    return new Real(product);
  };

  getReal() {
    return this.#real;
  };
};

exports.Real = Real;
