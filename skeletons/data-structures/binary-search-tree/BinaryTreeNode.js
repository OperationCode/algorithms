import Comparator from '../../utils/comparator/Comparator';
import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   */
  constructor(value = null) {}

  /**
   * @return {number}
   */
  get leftHeight() {}

  /**
   * @return {number}
   */
  get rightHeight() {}

  /**
   * @return {number}
   */
  get height() {}

  /**
   * @return {number}
   */
  get balanceFactor() {}

  /**
   * Get parent's sibling if it exists.
   * @return {BinaryTreeNode}
   */
  get uncle() {}

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  setValue(value) {}

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {}

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {}

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {}

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {}

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {}

  /**
   * @return {*[]}
   */
  traverseInOrder() {}

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
