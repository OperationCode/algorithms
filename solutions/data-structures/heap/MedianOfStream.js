import Heap from './Heap'


export function median(arr){



    var hmin = new Heap(arr.length+2, (a,b) => { return a < b});

    var hmax = new Heap(arr.length+2, (a,b) => { return a > b});
    

    var res = [];

    for (var i = 0; i < arr.length; i++){

	// first we insert the next value in the heap that it belongs.
	// If it is greater or equal to the smallest thing in the min heap, it goes in there, else it goes in the other.

	if ( arr[i] >= hmin.getMin()) 
	    hmax.insertKey(arr[i]);
	else 
	    hmin.insertKey(arr[i]);


	// We keep the min heap the same size, or one larger than the max heap.

	
	while (hmax.size >= hmin.size ){
	    hmin.insertKey(hmax.extractMin());
	}
	// now the max heap is smaller than the min heap
	while (hmin.size -1  > hmax.size){
	    hmax.insertKey(hmin.extractMin());
	}


	//now the min heap is  equal to, or one greater than the max heap.
	if (hmax.size === 0){
	    
	    res.push(hmin.getMin());
	} else {
	    if (hmin.size === hmax.size){
		res.push( (hmin.getMin() +hmax.getMin())/2  );
	    } else
		res.push(hmin.getMin());
	
	}

    }
    
    return res;

}
