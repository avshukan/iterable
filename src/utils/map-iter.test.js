'use strict';

const assert = require('assert');

const { mapIter } = require('./map-iter');



const map1 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
const fn1 = (item) => [item[0].toUpperCase(), item[1] * 2];
const result1 = Array.from(mapIter(map1, fn1));
const expected1 = [['A', 2], ['B', 4], ['C', 6]];
assert.deepStrictEqual(
  result1,
  expected1,
  `Expected ${expected1} but got ${result1}`,
);



const set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const fn2 = (item) => item * 10;
const result2 = Array.from(mapIter(set2, fn2));
const expected2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
assert.deepStrictEqual(
  result2,
  expected2,
  `Expected ${expected2} but got ${result2}`,
);



const arr3 = [];
const fn3 = (item) => item > 0 ? item * 2 : item;
const result3 = Array.from(mapIter(arr3, fn3));
const expected3 = [];

assert.deepStrictEqual(
  result3,
  expected3,
  `Expected ${expected3} but got ${result3}`,
);
