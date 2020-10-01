export default class RingBuffer {
  constructor(size = 10) {
    this.index = 0;
    this.size = size;
    this.buffer = new Array(this.size);
  }


  isEmpty() {}

  push(el) {}

  getBuffer() {}

  toString() {
    return this.buffer.toString();
  }
}
