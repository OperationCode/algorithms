import HashTable from './HashTable';


export function mostFrequent( arr){

    
    var len = arr.length;
    if (len ===0) return;

    var h = new HashTable(len);
    
    var best = arr[0];
    var bestCount = 1;
    
    for (var i = 0; i < len; i++){
	if (!h.get(arr[i])){
	    h.set(arr[i],1);
	    // if we have not seen this before, add it to the hash table with count1
	} else
	{
	    var tc = h.get(arr[i]);
	    h.set(arr[i],tc+1);
	    // if we have seen it before, increment its count
	    
	    if (tc+1 > bestCount){
		best = arr[i];
		bestCount = tc+1;
	    }
	    
	    
	}
    }
    return best;
}
