
const { TreeNode } = require('./iterables/tree-node');

const { Fibonacci } = require('./iterables/fibonacci');

const { take } = require('./utils/take');

const { filterIter } = require('./utils/filter-iter');

const tree = new TreeNode(
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

const threeNodes = take(tree, 3);

console.log('First three nodes in the tree:', threeNodes);


const fib = new Fibonacci(10);
const isEven = (num) => num % 2 === 0;
const evenFibs = filterIter(fib, isEven);
console.log('Even Fibonacci numbers:', evenFibs);
