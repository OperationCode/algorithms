export default class RingBuffer {
  constructor(size = 10) {
    this.index = 0;
    this.size = size;
    this.buffer = new Array(this.size);
  }

  push(el) {
    this.buffer[this.index] = el;
    if (this.index++ >= this.size)  this.index = 0;
  }

  getBuffer() {
    let buffer = [];
    for (let i = this.index; i < this.size; i++)
      buffer.push(this.buffer[i]);
    for (let i = 0; i < this.index; i++)
      buffer.push(this.buffer[i]);
    return buffer;
  }

  toString() {
    return this.buffer.toString().replace(/,,/g,"");
  }
}
