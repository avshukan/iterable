'use strict';

class Range {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.sign = Math.sign(this.step);

    if (this.sign > 0 && this.start >= this.end) {
      throw new Error('Start must be less than end');
    }

    if (this.sign < 0 && this.start <= this.end) {
      throw new Error('Start must be greater than end');
    }

    if (this.step === 0) {
      throw new Error('Step must not be zero');
    }
  }

  [Symbol.iterator]() {
    let currentIndex = this.start;

    return {
      [Symbol.iterator]() { return this; },

      next: () => {

        if (
          (this.sign > 0 && currentIndex >= this.end) ||
          (this.sign < 0 && currentIndex <= this.end)
        ) {
          return { done: true, value: undefined };
        }

        const value = currentIndex;

        currentIndex += this.step;

        return { done: false, value };
      },
    }
  }
}

module.exports = { Range };
