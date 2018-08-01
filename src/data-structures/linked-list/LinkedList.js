import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {}

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {}

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {}

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @return {LinkedListNode}
   */
  find({
    value = undefined
  }) {}

  /**
   * @param {*} value
   * @param {*} targetValue - insert after this target value
   * @return {LinkedList}
   */
  insertAfter(value, targetValue) {}

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {}

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {}

  /**
   * @return {LinkedListNode[]}
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
