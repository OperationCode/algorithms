export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
