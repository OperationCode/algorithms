



import HashTable from './HashTable';


export function largestConsecutiveSubsequence( arr){

    
    var len = arr.length;

    var h = new HashTable(len);
    
    var ans = 0;
    
    // Hash all the array elements 
    for (var i = 0; i < len; i++) 
        h.set(arr[i],true); 
  
    // check each possible sequence from the start 
    // then update optimal length 
    for (var i=0; i<len; i++) 
    { 
        // if current element is the starting 
        // element of a sequence 
        if (h.get(arr[i]-1) === undefined) 
        { 
	    console.log(["no earlier", arr[i] ]);
            // Then check for next elements in the 
            // sequence 
            var j = arr[i]; 
            while (h.get(j)) 
                j++; 
  
            // update  optimal length if this length 
            // is more 
            ans = Math.max(ans, j - arr[i]); 
        } 
    } 
    return ans; 

}
