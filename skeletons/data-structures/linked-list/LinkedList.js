import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {}

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
  find(value) {}

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  insertAfter(value, insertValue) {}

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
  toString() {
    return this.toArray().map(node => node.toString()).toString();
  }
}
