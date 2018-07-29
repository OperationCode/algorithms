import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {}

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {}

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {}

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {}

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find({
    value = undefined,
    callback = undefined,
  }) {}

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {}

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {}

  /**
   * @return {DoublyLinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}
