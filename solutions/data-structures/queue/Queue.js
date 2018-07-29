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
    return this.store.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store.shift();
  }

  toString() {
    return this.store.toString();
  }
}
