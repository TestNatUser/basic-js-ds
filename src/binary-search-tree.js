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
    if(!this.treeRoot){
       this.treeRoot = newNode;
    }else{
       this.addNode(this.treeRoot, newNode);
    };
 };

  addNode(node, newNode){
    if(newNode.data < node.data){
       if(!node.left ){
          node.left = newNode;
       }else{
          this.addNode(node.left, newNode);
       };
    } else {
       if(!node.right){
          node.right = newNode;
       }else{
          this.addNode(node.right,newNode);
       };
    };
  }

  has(data) {
   return this.find(data);
  }

  find(data) {
    if (this.treeRoot.data === data) {
      return this.treeRoot;
    } else if (this.treeRoot.data > data) {
     let node = this.treeRoot.right;
     while(node.data!==data){
        node = node.right>data ? node.right : node.left;
        return node.data;
     }
    }
    else if (this.treeRoot.data < data) {
      let node = this.treeRoot.left;
     while(node.data!==data){
        node = node.right>data ? node.right : node.left;
        return node.data;
     }
    }
  }

  remove(data) {
    let node = this.find(data);
    node.data = null;
    node.left = null;
    node.rigt = null;
  }

  min() {
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};