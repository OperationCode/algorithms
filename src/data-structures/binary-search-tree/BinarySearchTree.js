import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  /**
   * @param {function} [nodeValueCompareFunction]
   */
  constructor(nodeValueCompareFunction) {}

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {}

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {}

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {}

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}
