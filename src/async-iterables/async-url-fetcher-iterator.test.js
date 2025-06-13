'use strict';

const assert = require('assert');

const { AsyncURLFetcherIterator } = require('./async-url-fetcher-iterator');

// Мокаем глобальный fetch:
global.fetch = async (url) => {
  if (url === 'https://example.com') {
    return {
      status: 200,
      headers: {
        get: () => 1234
      }
    };
  }

  if (url === 'https://httpbin.org/get') {
    return {
      status: 200,
      headers: {
        get: () => 5678
      }
    };
  }

  if (url === 'https://invalid-url.xyz') {
    throw new Error('Network error');
  }

  // fallback
  return {
    status: 500,
    headers: {
      get: () => '0'
    }
  };
};

(async () => {
  const urls = [
    'https://example.com',
    'https://httpbin.org/get',
    'https://invalid-url.xyz'
  ];

  const fetcher = new AsyncURLFetcherIterator(urls);

  const result = [];

  for await (const item of fetcher) {
    result.push(item);
  }

  const expected = [
    { url: 'https://example.com', status: 200, contentLength: 1234 },
    { url: 'https://httpbin.org/get', status: 200, contentLength: 5678 },
    null
  ];

  assert.deepStrictEqual(result, expected, `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(result)}`);
})();
