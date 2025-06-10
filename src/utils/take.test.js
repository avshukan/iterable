'use strict';

const assert = require('assert');

const { take } = require('./take');



const map1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

const result1 = take(map1, 2);

const expected1 = [['a', 1], ['b', 2]];

assert.deepStrictEqual(
    result1,
    expected1,
    `Expected ${expected1} but got ${result1}`,
);



const set2 = new Set(['x', 'y', 'z', 'a', 'x', 'b', 'x', 'c', 'z']);

const result2 = take(set2, 6);

const expected2 = ['x', 'y', 'z', 'a', 'b', 'c'];

assert.deepStrictEqual(
    result2,
    expected2,
    `Expected ${expected2} but got ${result2}`,
);
