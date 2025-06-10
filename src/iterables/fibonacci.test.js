'use strict';

const assert = require('assert');

const { Fibonacci } = require('./fibonacci');

const fib1 = new Fibonacci(10);

const result1 = [];

for (const value of fib1) {
  result1.push(value);
}

const expected1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

assert.deepStrictEqual(
  result1,
  expected1,
  `Expected ${expected1} but got ${result1}`,
);



const fib2 = new Fibonacci(5);

const result2 = Array.from(fib2);

assert.strictEqual(Array.isArray(result2), true, 'Result should be an array');



assert.throws(
  () => new Fibonacci(-1),
  {
    name: 'RangeError',
    message: 'limit must be non-negative integer, got -1',
  },
  'Expected RangeError for negative count',
);
