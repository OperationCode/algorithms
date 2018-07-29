export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {}

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
