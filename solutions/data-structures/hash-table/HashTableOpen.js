
// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTableOpen {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with null;
    this.buckets = Array(hashTableSize).fill(null);
    this.size = 0;
    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
    
   
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
      
      if (this.size +1 >= this.buckets.length){
	  console.log("too full");
	  // we do not try to fill the hash table if there are only 10 slot left.
	  return null;
      }
      const keyHash = this.hash(key);
      this.keys[key] = keyHash; // for debugging
      
      var pos = keyHash;
      var c  = 0;
      while(this.buckets[pos]){
	  if (this.buckets[pos].key === key){
	      this.buckets[pos].value = value;
	      return;
	  }
	  pos = (pos+1) % this.buckets.length;
	  if (c++ > 100) break;
      }
      this.buckets[pos] = {key: key,value: value};
      
  }



  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
      const keyHash = this.hash(key);
      delete this.keys[key]; // for debugging
      
      var pos = keyHash;
      var c= 0;
      while(this.buckets[pos]){
	  
	  if (this.buckets[pos].key === key){
	      this.buckets[pos].key = "deleted";
	      return;
	  }
	  pos = (pos+1) % this.buckets.length;
      
          if (c++ > 100) break;
      }
      return null;
  }


  /**
   * @param {string} key
   * @return {*}
   */
  deleteG(key) {
      const keyHash = this.hash(key);
      delete this.keys[key]; // for debugging
      
      var pos = keyHash;
      var c= 0;
      while(this.buckets[pos]){
	  
	  if (this.buckets[pos].key === key){
	      // we have found the spot to be deleted. 
	      // we mark it to null
	      this.buckets[pos] = null;
	      var p = pos+1;
	      while(this.buckets[p]){
		  var  pair = this.buckets[p];
		  this.buckets[p] = null;
		  this.set(pair.key,pair.value);
		  p = (p+1) % this.buckets.length;
	      }
	      // now p is the first empty slot
	      

	      
	  }
	  pos = (pos+1) % this.buckets.length;
      
          if (c++ > 100) break;
      }
      return null;
  }




  /**
   * @param {string} key
   * @return {*}
   */
    get(key) {
	const keyHash = this.hash(key);

	var pos = keyHash;
	var c = 0;
	while(this.buckets[pos]){
	    
	    if (this.buckets[pos].key === key){
		return this.buckets[pos].value;
		
	    }
	    pos = (pos+1) % this.buckets.length;
	    if (c++ > 100) break;
	}
	return;
    }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }

 hash1(key){
	// http://www.cse.yorku.ca/~oz/hash.html
	//  This is a simple hash function that works well.
	
	const arr = Array.from(key);
	const len = arr.length;
	
	var hash = 5381;
	

	for(var i = 0; i < len; i++){
            hash = (33 * hash) + arr[i].charCodeAt(0); /* hash * 33 + c */
	}
	return hash  % this.buckets.length;
    }
    


}
