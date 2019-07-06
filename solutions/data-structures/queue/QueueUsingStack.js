import Stack from '../stack/Stack'


export default class QueueS {
  constructor() {
    this.store = new Stack();
    this.otherStack =  new Stack();
  }

  isEmpty() {
      return this.store.isEmpty();
  }

  peek() {
       return this.store.peek();
  }

  enqueue(el) {
      while (!this.store.isEmpty()){
	  this.otherStack.push(this.store.pop());
      }
      this.store.push(el);
      while (!this.otherStack.isEmpty()){
	  this.store.push(this.otherStack.pop());
      }
  }

  dequeue() {
      return this.store.pop()
  }

  toString() {
    return this.store.toString();
  }
}

