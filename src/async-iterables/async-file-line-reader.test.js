'use strict';

const assert = require('assert');

const { AsyncFileLineReader } = require('./async-file-line-reader');

const fs = require('fs/promises');

const path = require('path');

(async () => {
  const testFilePath = path.join(__dirname, 'test-file.txt');

  await fs.writeFile(testFilePath, 'line1\nline2\nline3');

  const reader = new AsyncFileLineReader(testFilePath);

  const result = [];

  for await (const line of reader) {
    result.push(line);
  }

  const expected = ['line1', 'line2', 'line3'];

  assert.deepStrictEqual(result, expected, `Expected ${expected} but got ${result}`);

  await fs.unlink(testFilePath);
})();



(async () => {
  const emptyFilePath = path.join(__dirname, 'empty-file.txt');

  await fs.writeFile(emptyFilePath, '');

  const { AsyncFileLineReader } = require('./async-file-line-reader');

  const reader = new AsyncFileLineReader(emptyFilePath);

  const result = [];

  for await (const line of reader) {
    result.push(line);
  }

  assert.deepStrictEqual(result, [], 'Expected empty array for empty file');

  await fs.unlink(emptyFilePath);
})();


(async () => {
  const nonExistingPath = path.join(__dirname, 'non-existing-file.txt');

  let errorCaught = false;

  try {
    const reader = new AsyncFileLineReader(nonExistingPath);

    // принудительно начинаем чтение, чтобы получить ошибку
    for await (const line of reader) {
      // ничего не делаем
    }
  } catch (err) {
    errorCaught = true;
    assert.ok(err, 'Expected error to be thrown');
  }

  assert.strictEqual(errorCaught, true, 'Expected error to be caught');
})();
