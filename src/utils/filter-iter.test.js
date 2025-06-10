'use strict';

const assert = require('assert');

const { filterIter } = require('./filter-iter');



const map1 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

const fn1 = (item) => item[1] % 2 === 1;

const result1 = Array.from(filterIter(map1, fn1));

const expected1 = [['a', 1], ['c', 3]];

assert.deepStrictEqual(
  result1,
  expected1,
  `Expected ${expected1} but got ${result1}`,
);



const set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const fn2 = (item) => item % 3 === 0;

const result2 = Array.from(filterIter(set2, fn2));

const expected2 = [3, 6, 9];

assert.deepStrictEqual(
  result2,
  expected2,
  `Expected ${expected2} but got ${result2}`,
);



const arr3 = [];

const fn3 = (item) => item > 0;

const result3 = Array.from(filterIter(arr3, fn3));

const expected3 = [];

assert.deepStrictEqual(
  result3,
  expected3,
  `Expected ${expected3} but got ${result3}`,
);
