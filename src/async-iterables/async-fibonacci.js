'use strict';

class AsyncFibonacci {
  constructor(limit) {
    if (!Number.isInteger(limit) || limit < 0) {
      throw new RangeError(`limit must be non-negative integer, got ${limit}`);
    }

    this.limit = limit;
  }

  [Symbol.asyncIterator]() {
    let index = 1;

    let previous = 0;

    let current = 1;

    return {
      [Symbol.asyncIterator]() { return this; },

      next: async () => {
        if (index > this.limit) {
          return { done: true, value: undefined };
        }

        const value = current;

        current = previous + current;

        previous = value;

        index += 1;

        await new Promise(resolve => setTimeout(resolve, 500)); // задержка

        return {
          done: false,
          value: value,
        };
      }
    }
  }
}

module.exports = { AsyncFibonacci };
