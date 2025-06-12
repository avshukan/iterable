'use strict';

const assert = require('assert');

const { AsyncFibonacci } = require('./async-fibonacci');

(async () => {
  const fib = new AsyncFibonacci(5);

  const result = [];

  for await (const num of fib) {
    result.push(num);
  }

  const expected = [1, 1, 2, 3, 5];

  assert.deepStrictEqual(
    result,
    expected,
    `Expected ${expected} but got ${result}`
  );

  console.log('✅ All tests passed');
})();
