import DoublyLinkedList from './DoublyLinkedList';
import { insert }  from  './Insert';


export default class PriorityQueue {
  constructor(comp = (a,b) => { return a.value < b.value } ) {
    this.store = new DoublyLinkedList();
    this.comp = comp;
  }


  isEmpty() {     
   return this.store.head === null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store.head.value;
  }

  enqueue(el) {
   // we need to insert in the correct place
      this.store =  insert(this.store, el, this.comp);
      return this.store;

  }

  getHighest() {
    if (this.isEmpty()) {
      return null;
    }

      var res = this.store.head.value;
      this.store.deleteHead();

    return res;
  }

  toString() {
    return this.store.toString();
  }
}
