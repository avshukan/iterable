'use strict';

const assert = require('assert');

const { Range } = require('./range');



const range1 = new Range(0, 5);

const result1 = [];

for (const value of range1) {
  result1.push(value);
}

const expected1 = [0, 1, 2, 3, 4];

assert.deepStrictEqual(
  result1,
  expected1,
  `Expected ${expected1} but got ${result1}`,
);



const range2 = new Range(5, 10, 2);

const result2 = [];

for (const value of range2) {
  result2.push(value);
}

const expected2 = [5, 7, 9];

assert.deepStrictEqual(
  result2,
  expected2,
  `Expected ${expected2} but got ${result2}`,
);



const range3 = new Range(10, 5, -1);

const result3 = [];

for (const value of range3) {
  result3.push(value);
}

const expected3 = [10, 9, 8, 7, 6];

assert.deepStrictEqual(
  result3,
  expected3,
  `Expected ${expected3} but got ${result3}`,
);



assert.throws(
  () => new Range(1, 5, -1),
  Error('Start must be greater than end'),
);



assert.throws(
  () => new Range(10, 5, 1),
  Error('Start must be less than end'),
);



assert.throws(
  () => new Range(1, 5, 0),
  Error('Step must not be zero'),
);


assert.strictEqual(
  Array.isArray(Array.from(new Range(1, 5))),
  true,
  'Result should be an array',
);
