'use strict';

function* mapIter(iterable, fn) {
  for (const item of iterable) {
    yield fn(item);
  }
}

module.exports = { mapIter };
