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
      this.treeRoot = newNode;
    } else {
      this.addNode(this.treeRoot, newNode);
    };
  };

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      };
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      };
    };
  }

  has(data) {
    return this.find(data)=== null ? false : true;
  }

  find(data) {
    let node = this.treeRoot
    while (node.data !== data) {
      node = data < node.data ?
        node = node.left :
        node = node.right;
      if (!node) return null;
    }
    return node;
  }

  remove(data) {
    const node = this.find(data);
    if (node) {
      if (node.left && node.right) {
        return null;
      }
      if (node.left) {
        return node.right;
      }

      else if (node.right) {
        return node.left;
      }
    }
  }

  min() {
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};