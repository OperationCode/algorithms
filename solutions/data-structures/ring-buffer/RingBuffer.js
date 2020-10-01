export default class RingBuffer {
  constructor() {
    this.buffer = new Array(size);
    this.index = 0;
    this.size = size;
  }

  isEmpty() {
    return !this.buffer.length;
  }

  push(el) {
    this.buffer.push(el);
    if (index++ >= size)
      index = 0;
  }

  getBuffer() {
    buffer = [];
    for (let i = index; i < this.size; i++)
      buffer.push(this.buffer[i]);
    for (let i = 0; i < this.index; i++)
      buffer.push(this.buffer[i]);
    return buffer;
  }

  toString() {
    return this.buffer.toString();
  }
}
