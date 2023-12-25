const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.treeRoot) {
      return this.treeRoot = newNode;
    } else if (this.treeRoot.data > data) {
      return this.add(this.right);
    } else if (this.treeRoot.data < data) {
      return this.add(this.left);
    }
  }

  has(data) {
    if (this.data === data) {
      return true;
    } else if (!this.data) {
      return false;
    } else if (this.data > data) {
      return this.has(this.right);
    } else if (this.data < data) {
      return this.has(this.left);
    }
  }

  find(data) {
    if (this.treeRoot.data === data) {
      return this.treeRoot;
    } else if (this.treeRoot.data > data) {
      if(this.treeRoot.right>data){
        return this.find()
      }
    }
    else if (this.treeRoot.data < data) {
      return this.find(this.left)
    }
  }

  remove(data) {
    let node = this.find(data);
    node.data = null;
    node.left = null;
    node.rigt = null;
  }

  min() {
    if (this.treeRoot.left === null)
      return this;
    else
      return this.find(this.treeRoot.left);
  }

  max() {
    if (this.right === null)
      return this;
    else {
      return this.find(this.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};