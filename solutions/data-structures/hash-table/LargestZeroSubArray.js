


import HashTable from './HashTable';


export function largestZeroSubArray( arr){

    
    var len = arr.length;

    if (len === 0) return null;

    var h = new HashTable(len);
    
    
    var sum = 0; // Initialize the sum of elements 
    var max_len = 0; // Initialize result 
  
    // Traverse through the given array 
    for (var i = 0; i < len; i++) { 
        // Add current element to sum 
        sum += arr[i]; 
  
        if (arr[i] === 0 && max_len === 0) 
            max_len = 1; 
        if (sum === 0) 
            max_len = i + 1; 
  
        // Look for this sum in Hash table 
        if (h.get(sum) !== undefined ) { 
            // If this sum is seen before, then update max_len 

	    // Note we cannot use !(h.get(sum)  as we sometimes store 0. 
            max_len = Math.max(max_len, i - h.get(sum)); 
        } 
        else { 
            // Else insert this sum with index in hash table 
            h.set(sum,i);
        } 
	
    } 
  
    return max_len; 

}
