'use strict';

function* filterIter(iterable, fn) {
  for (const item of iterable) {
    if (fn(item)) {
      yield item;
    }
  }
}

module.exports = { filterIter };
