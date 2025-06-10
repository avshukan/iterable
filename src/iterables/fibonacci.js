'use strict';

class Fibonacci {
  constructor(limit) {
    if (!Number.isInteger(limit) || limit < 0) {
      throw new RangeError(`limit must be non-negative integer, got ${limit}`);
    }

    this.limit = limit;
  }

  [Symbol.iterator]() {
    let index = 1;

    let previous = 0;

    let current = 1;

    return {
      [Symbol.iterator]() { return this; },

      next: () => {
        if (index > this.limit) {
          return { done: true, value: undefined };
        }

        const value = current;

        current = previous + current;

        previous = value;

        index += 1;

        return {
          done: false,
          value: value,
        };
      }
    }
  }
}

module.exports = { Fibonacci };
