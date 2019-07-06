import Queue from "./Queue";
import Stack from "../stack/Stack";

export default class StackQ {
  constructor() {
    this.store = new Queue();
  }


// The idea here is to make insertion slow and peeking and popping fast.
// We keep the items in the Queue in the reverse of the order the usually would be in.  
// 

  isEmpty() {
      return  this.store.isEmpty();
  }

  peek() {
      return this.store.peek();
  }

  push(el) {
      var s = this.store.length();
     
      this.store.enqueue(el);

// we want the most recently added object to be next item that is popped.  We need to remove all the other items and 
// queue them up so they are newer than the current item.

       for (var i = 0; i < s; i++) {
	  this.store.enqueue(this.store.peek());
	   this.store.dequeue();
       }
  
      return this.store.peek();
  }

  pop() {
    return this.store.dequeue();
  }

  toString() {  
    return this.store.toString();
  }
}
