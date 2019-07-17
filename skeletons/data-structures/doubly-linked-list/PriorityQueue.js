import DoublyLinkedList from './DoublyLinkedList';
import { insert }  from  './Insert';


export default class PriorityQueue {
  constructor(comp = (a,b) => { return a.value < b.value } ) {
    this.store = new DoublyLinkedList();
    this.comp = comp;
  }


  isEmpty() {     

  }

  peek() {
  
   
  }

  enqueue(el) {
 
  }

  getHighest() {
   
  }

  toString() {
    return this.store.toString();
  }
}
