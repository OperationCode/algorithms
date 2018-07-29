import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {}

  /**
   * @return {boolean}
   */
  isEmpty() {}

  /**
   * @return {*}
   */
  peek() {}

  /**
   * @param {*} value
   */
  push(value) {}

  /**
   * @return {*}
   */
  pop() {}

  /**
   * @return {*[]}
   */
  toArray() {}

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
