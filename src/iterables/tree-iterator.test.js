'use strict';

const assert = require('assert');

const { TreeIterator } = require('./tree-iterator');

const mockTree1 = {
  data: 'some data',
  getChildren: () => [
    { data: 'child1', getChildren: () => [] },
    { data: 'child2', getChildren: () => [{ data: 'grandchild1', getChildren: () => [] }] },
  ],
};

const treeIterator1 = new TreeIterator(mockTree1);

const result1 = treeIterator1.next();

const expected1 = 'some data';

assert.deepStrictEqual(
  result1.value.data,
  expected1,
  `Expected ${JSON.stringify(expected1)} but got ${JSON.stringify(result1)}`,
);

assert.strictEqual(treeIterator1.next().value.data, 'child1');

assert.strictEqual(treeIterator1.next().value.data, 'child2');

assert.strictEqual(treeIterator1.next().value.data, 'grandchild1');

assert.strictEqual(treeIterator1.next().done, true, 'Expected done to be true after all elements are iterated');

assert.strictEqual(treeIterator1.next().value, undefined, 'Expected value to be undefined after all elements are iterated');
