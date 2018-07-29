export default class Queue {
  constructor() {
    this.store = [];
  }

  isEmpty() {
    return !this.store.length;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store[0];
  }

  enqueue(value) {
    return this.store.unshift(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store.pop();
  }

  toString() {
    return this.store.toString();
  }
}
