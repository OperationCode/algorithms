

import HashTable from './HashTable';


export function findPairSum( arr, sum ){

    
    var len = arr.length;

    var h = new HashTable(len);
    
    
    for (var i = 0; i < len; i++){

	if (h.get(sum-arr[i])){
	    // we have found a pair
	    return [sum-arr[i], arr[i] ];
	    }
	h.set(arr[i],true);
    }
    return null;
    }

export function countPairSum( arr, sum ){

    
    var len = arr.length;

    var h = new HashTable(len);
    
    var count = 0;
    
    for (var i = 0; i < len; i++){

	if (h.get(sum-arr[i])){
	    // we have found a pair
	    count++;
	    }
	h.set(arr[i],true);
    }
    return count;
    }
