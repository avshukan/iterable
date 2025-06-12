'use strict';

class AsyncURLFetcherIterator {
  #urls;

  constructor(urls = []) {
    this.#urls = urls;
  }

  [Symbol.asyncIterator]() {
    let index = 0;

    return {
      [Symbol.asyncIterator]() { return this; },

      next: async () => {
        if (index >= this.#urls.length) {
          return { done: true };
        }

        const url = this.#urls[index];

        index += 1;

        try {
          const response = await fetch(url);

          return {
            done: false,
            value: {
              url: url,
              status: response.status,
              contentLength: response.headers.get('content-length'),
            },
          };
        } catch (error) {
          return { value: null, done: false };
        }
      }
    }
  }
}

module.exports = { AsyncURLFetcherIterator };
