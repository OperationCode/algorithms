import { makeHeap } from '../FloydsHeapAlg';




describe(' Heap ', () => {

 
 it('should create a Heap from an array.', () => {


     var h = makeHeap([5,4,3,2,1]);

     expect(h.isHeap()).toBeTruthy();
});


 it('should extract in order.', () => {

     var h = makeHeap([5,4,3,2,1]);

     expect(h.extractMin()).toBe(1);
     expect(h.extractMin()).toBe(2);
     expect(h.extractMin()).toBe(3);
     expect(h.extractMin()).toBe(4);
     expect(h.extractMin()).toBe(5);
     expect(h.extractMin()).toBeNull();
     

});

});
