import DoublyLinkedListNode from './DoublyLinkedListNode';

export default class DoublyLinkedList {
  constructor() {}

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
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find({
    value,
    callback
  }) {}

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {}

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {}

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {}

  /**
   * @return {DoublyLinkedListNode[]}
   */
  toArray() {
    const nodes = [];
    let node = this.head;

    while (node) {
      nodes.push(node);
      node = node.next;
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
