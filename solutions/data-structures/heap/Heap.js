   
function parent(i){
    if (i === 0) return 0;
    return Math.floor((i-1)/2);
}

function left(i){
      return 2*i +1;
}

function right(i){
    return 2*i+2;
}



export default class Heap {
  constructor( capacity = 100, comp = (a,b) => {return a < b}  ) {
      this.store = new Array(capacity);;
      this.capacity = capacity;
      this.size = 0;
      this.comp = comp;
  }
 

 swap(i,j){
	
	var tmp = this.store[i];
	this.store[i] = this.store[j];
	this.store[j] = tmp;
    }


    isEmpty(){
	return this.size === 0;
    }

    isHeap(){

	for(var i =0;  2 * i < this.size ;i++){

	    if ( left(i) < this.size && this.comp( this.store[left(i)] , this.store[i])) return false;
	    if ( right(i) < this.size && this.comp( this.store[right(i)] , this.store[i])) return false;
	    
	}
	return true;
	
    }

   extractMin(){
       // the top item is the smallest one
       var res = this.store[0];
       //  we need to fix up the rest of the heap
       
       if (this.size <= 0) 
           return null; 
       if (this.size == 1) 
       { 
           this.size--; 
           return this.store[0]; 
       } 
       
       // Store the minimum value, and remove it from heap 
       
       this.store[0] = this.store[this.size-1]; 
       this.size--; 
       this.heapify(0);        
       return res;
   }
    
    getMin(){
	if ( this.size === 0) return null;
	// return the top element
	return this.store[0];
    }
    
    insertKey(el){
	// To insert a key, we look down the heap for a place to put it.
	// do we go left or right each time?
	if (this.size == this.capacity) return null;

	this.size++;
	var i = this.size -1;
	this.store[i] = el;
	while (i !== 0 && !this.comp( this.store[parent(i)], this.store[i])) 
	{ 

	    
	    this.swap(i, parent(i) ); 
	    i = parent(i); 
	}
    }

    decreaseKey(i,new_val){
	// if we decrease a key, it may need to go upwards
	this.store[i] = new_val; 
	while (i != 0 && !this.comp( this.store[parent(i)] , this.store[i]) )
	{ 
	    this.swap(i,parent(i)); 
	    i = parent(i); 
	} 
	
    }
    
    
    deleteKey(i){
	// if we delete a key we need to pull up the smaller of the two 
	// children, and insert one of its children in the other.
	this.decreaseKey(i, Number.MIN_SAFE_INTEGER); 
	var out = this.extractMin(); 
    }


    heapify(i){
	var l = left(i); 
	var r = right(i); 
	var smallest = i; 
	if (l < this.size && this.comp( this.store[l] , this.store[i]) )
            smallest = l; 
	if (r < this.size && this.comp( this.store[r] ,  this.store[smallest]) )
            smallest = r; 
	if (smallest != i) 
	{ 
            this.swap( i, smallest); 
            this.heapify(smallest); 
	} 
    }




toString(){

    var res = this.store.slice(0,this.size);
    
    return res.map(node => node.toString()).toString();
    
    
}

}
