'use strict';

const take = (iterable, count) => {
  if (count < 0) {
    throw new RangeError('Count must be a non-negative integer');
  }

  const result = [];
  let index = 0;

  for (const item of iterable) {
    if (index >= count) {
      break;
    }
    result.push(item);
    index++;
  }

  return result;
}

module.exports = { take };
