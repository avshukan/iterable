'use strict';

const { TreeIterator } = require("./tree-iterator");

class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  getValue() {
    return this.value;
  }

  getChildren() {
    return this.children;
  }

  toString() {
    return `TreeNode[${this.value}]`;
  }

  [Symbol.iterator]() {
    return new TreeIterator(this);
  }
}

module.exports = { TreeNode };
