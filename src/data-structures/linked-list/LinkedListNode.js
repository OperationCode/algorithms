export default class LinkedListNode {
  constructor(value, next = null) {}

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
