'use strict';

const fs = require('fs');

const readline = require('readline');

class AsyncFileLineReader {
  #rl;

  constructor(filePath) {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    this.#rl = rl;
  }

  [Symbol.asyncIterator]() {
    return this.#rl[Symbol.asyncIterator]();
  }
}

module.exports = { AsyncFileLineReader };
