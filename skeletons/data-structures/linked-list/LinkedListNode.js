export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
  }

  toString() {
    return this.value.toString();
  }
}
