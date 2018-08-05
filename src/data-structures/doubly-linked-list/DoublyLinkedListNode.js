export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
