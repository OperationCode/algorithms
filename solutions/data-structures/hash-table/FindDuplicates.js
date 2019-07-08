
import HashTable from './HashTable';


export function findDuplicates( arr){

    
    var len = arr.length;

    var h = new HashTable(len);
    
    var res = [];
    
    for (var i = 0; i < len; i++){

	if (h.get(arr[i]) === 0){
	    // if the hash table contains 0, we have not added this value to the output.
	    res.push(arr[i]);
	    
	    h.set(arr[i],1);
	    // we set it to be 1, so that it will not be added again
	} 
	if (!h.get(arr[i]))
	    h.set(arr[i],0);
	// we set each item to be 0 initially, it is it not set to anything else
    }
    return res;
    }



export function countDuplicates( arr){
    return findDuplicates(arr).length;
    }
