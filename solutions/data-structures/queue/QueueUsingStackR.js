import Stack from '../stack/Stack'


export default class QueueR {
  constructor() {
    this.store = new Stack();
    this.otherStack =  new Stack();
  }

  isEmpty() {
      return this.store.isEmpty();
  }

  peek() {
      while (!this.store.isEmpty()){
	  this.otherStack.push(this.store.pop());
      }
      var ans = this.otherStack.peek();
      while (!this.otherStack.isEmpty()){
	  this.store.push(this.otherStack.pop());
      }

      return ans;
  }

  enqueue(el) {
     return this.store.push(el);
  }

  dequeue() {
      while (!this.store.isEmpty()){
	  this.otherStack.push(this.store.pop());
      }
      var ans = this.otherStack.pop();
      while (!this.otherStack.isEmpty()){
	  this.store.push(this.otherStack.pop());
      }

      return ans;
  }

  toString() {
      while (!this.store.isEmpty()){
	  this.otherStack.push(this.store.pop());
      }
      var ans = this.otherStack.toString();
      while (!this.otherStack.isEmpty()){
	  this.store.push(this.otherStack.pop());
      }

    return ans;
  }
}

