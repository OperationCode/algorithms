export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
  }

  toString() {
    return this.value.toString();
  }
}
