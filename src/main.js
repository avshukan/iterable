const { TreeNode } = require('./iterables/tree-node');

const { Fibonacci } = require('./iterables/fibonacci');

const { take } = require('./utils/take');

const { filterIter } = require('./utils/filter-iter');

const { AsyncFileLineReader } = require('./async-iterables/async-file-line-reader');

const { AsyncURLFetcherIterator } = require('./async-iterables/async-url-fetcher-iterator');



const main = async () => {

    console.log('='.repeat(50));
    console.log('Task 1: Iterating through the tree nodes:');

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



    console.log('='.repeat(50));
    console.log('Task 2: Iterating through the tree nodes:');

    for (const branch of tree) {
        console.log(branch.getValue());
    }



    console.log('='.repeat(50));
    console.log('Task 3: Fibonacci sequence:');

    const fib = new Fibonacci(10);
    const isEven = (num) => num % 2 === 0;
    const evenFibs = [...filterIter(fib, isEven)];
    console.log('Even Fibonacci numbers:', evenFibs);



    console.log('='.repeat(50));
    console.log('Task 4: Async File Line Reader:');

    const reader = new AsyncFileLineReader('./data/text.txt');

    for await (const line of reader) {
        console.log(line);
    }


    console.log('='.repeat(50));
    console.log('Task 5: Async Fibonacci sequence:');
    const asyncFib = new Fibonacci(10);
    console.log('First 10 Fibonacci numbers:', [...asyncFib]);



    console.log('='.repeat(50));
    console.log('Task 6: Async URL Fetcher Iterator:');

    const urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://google.com',
        'https://jsonplaceholder.typicode.com/comments',
        'https://yandex.ru',
        'https://jsonplaceholder.typicode.com/404error',
        'https://jsonplaceholder.typicode.com/albums',
    ];

    const urlFetcher = new AsyncURLFetcherIterator(urls);

    for await (const result of urlFetcher) {
        if (result) {
            console.table(result);
            // console.log(`URL: ${result.url}, Status: ${result.status}, Content Length: ${result.contentLength}`);
        } else {
            console.log('Failed to fetch URL');
        }
    }
};



main()
    .catch((err) => {
        console.error('Error in main function:', err);
    });
