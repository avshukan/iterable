'use strict';

const assert = require('assert');

const { TreeNode } = require('./tree-node');

const tree1 = new TreeNode(
  'root',
  [
    new TreeNode('child1', [
      new TreeNode('grandchild1'),
      new TreeNode('grandchild2', [
        new TreeNode('great-grandchild1'),
        new TreeNode('great-grandchild2'),
      ]),
      new TreeNode('grandchild3'),
    ]),
    new TreeNode('child2'),
    new TreeNode('child3', [new TreeNode('grandchild2'), new TreeNode('grandchild3')]),
  ],
);

const result1 = [];

for (const node of tree1) {
  result1.push(node?.getValue());
}

const expected1 = [
  'root',
  'child1',
  'grandchild1',
  'grandchild2',
  'great-grandchild1',
  'great-grandchild2',
  'grandchild3',
  'child2',
  'child3',
  'grandchild2',
  'grandchild3',
];

assert.deepStrictEqual(
  result1,
  expected1,
  `Expected ${expected1} but got ${result1}`,
);



const tree2 = new TreeNode(
  'root',
  [
    new TreeNode('child1', [
      new TreeNode('grandchild1'),
      new TreeNode('grandchild2', [
        new TreeNode('great-grandchild1'),
        new TreeNode('great-grandchild2'),
      ]),
      new TreeNode('grandchild3'),
    ]),
    new TreeNode('child2'),
    new TreeNode('child3', [new TreeNode('grandchild2'), new TreeNode('grandchild3')]),
  ],
);

const result2 = Array.from(tree2).map(node => node?.getValue());

const expected2 = [
  'root',
  'child1',
  'grandchild1',
  'grandchild2',
  'great-grandchild1',
  'great-grandchild2',
  'grandchild3',
  'child2',
  'child3',
  'grandchild2',
  'grandchild3',
];

assert.deepStrictEqual(
  result2,
  expected2,
  `Expected ${expected2} but got ${result2}`,
);
