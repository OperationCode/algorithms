import Heap from './Heap';



export function makeHeap(arr){

    var h = new Heap( arr.length+1, (a,b)=> { return a < b} );
    h.store = arr;
    h.size = arr.length;
    
    var half = Math.floor(arr.length/2);
    
    
    for (var i = half; i >= 0; i--){
	h.heapify(i);	
    }
    return h;
}
