import Heap from './Heap';


export default class PriorityQueueHeap {
  constructor(comp = (a,b) => { return a  < b } ) {
    this.store = new Heap(100, comp);
    this.comp = comp;
  }


  isEmpty() {     
      return this.store.size === 0;
  }

  peek() {
      return this.store.getMin();
  
   
  }

  enqueue(el) {
      this.store.insertKey(el);
      
  }

  getHighest() {
    return   this.store.extractMin();
   
  }

  toString() {
    return this.store.toString();
  }
}
