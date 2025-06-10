'use strict';

class TreeIterator {
  constructor(node) {
    this.stack = [node];
  }

  next() {
    if (this.stack.length === 0) {
      return { done: true, value: undefined };
    }

    let node = this.stack.pop();

    if (!node) {
      return { done: true, value: undefined };
    }

    const children = [...node.getChildren()];

    if (children.length > 0) {
      this.stack.push(...children.reverse());
    }

    return { done: false, value: node };
  }
}

module.exports = { TreeIterator };
