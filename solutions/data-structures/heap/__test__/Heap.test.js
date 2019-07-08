import Heap from '../Heap';




describe(' Heap ', () => {

 
 it('should create an empty Heap.', () => {

     var h = new Heap();
     
     expect(h.store).not.toBeNull();

     expect(h.capacity).toBe(100);
     expect(h.size).toBe(0);
     
     h = new Heap(100);
     
     expect(h.capacity).toBe(100);
});


 it('should add values to heap.', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
      expect(h.toString()).toBe('2,3');

   
     
});



 it('should delete values .', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
    
     h.deleteKey(1); 
     expect(h.toString()).toBe('2');
     h.insertKey(15); 
     h.insertKey(5); 
     h.insertKey(4); 
     h.insertKey(45);
     expect(h.toString()).toBe('2,4,5,15,45');
     
     
     
});



 it('should extract the min.', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
      expect(h.toString()).toBe('2,3');

     h.deleteKey(1); 
     expect(h.toString()).toBe('2');
     h.insertKey(15); 
     h.insertKey(5); 
     h.insertKey(4); 
     h.insertKey(45);
     expect(h.toString()).toBe('2,4,5,15,45');
     
     
     expect(h.extractMin()).toBe(2);

   
});

 it('should extractget  the min.', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
      expect(h.toString()).toBe('2,3');

     h.deleteKey(1); 
     expect(h.toString()).toBe('2');
     h.insertKey(15); 
     h.insertKey(5); 
     h.insertKey(4); 
     h.insertKey(45);
     
     
     expect(h.extractMin()).toBe(2);

     
     expect(h.getMin()).toBe(4);
  
});


 it('should decrease keys .', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
      expect(h.toString()).toBe('2,3');

     h.deleteKey(1); 
     expect(h.toString()).toBe('2');
     h.insertKey(15); 
     h.insertKey(5); 
     h.insertKey(4); 
     h.insertKey(45);
     expect(h.toString()).toBe('2,4,5,15,45');
     
     
     expect(h.extractMin()).toBe(2);

     expect(h.toString()).toBe('4,15,5,45');
     
     expect(h.getMin()).toBe(4);
     
     h.decreaseKey(2, 1); 
     expect( h.getMin()).toBe(1);

   
     
});


 it('should test the heap property', () => {
 
     var h = new Heap();
     
     h.insertKey(3); 
     h.insertKey(2); 
     
     expect(h.isHeap()).toBeTruthy();

     h.deleteKey(1); 
     expect(h.isHeap()).toBeTruthy();
     h.insertKey(15); 
     h.insertKey(5); 
     h.insertKey(4); 
     h.insertKey(45);
     expect(h.isHeap()).toBeTruthy();

     h.extractMin();
     
     expect(h.isHeap()).toBeTruthy();

     
     h.decreaseKey(2, 1); 

     expect(h.isHeap()).toBeTruthy();
     
});



});
