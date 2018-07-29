import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {}

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
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({
    value = undefined,
    callback = undefined,
  }) {}

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
  toArray() {}

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {}
}
