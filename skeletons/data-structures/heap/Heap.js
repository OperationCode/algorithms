   
function parent(i){
  }

function left(i){
    
}

function right(i){
 
}



export default class Heap {
  constructor( capacity = 100, comp = (a,b) => {return a < b}  ) {
     
  }
 

 swap(i,j){
	

    }


    isEmpty(){

    }

    isHeap(){

	
    }

   extractMin(){
     
   }
    
    getMin(){

	return this.store[0];
    }
    
    insertKey(el){

    }

    decreaseKey(i,new_val){

    }
    
    
    deleteKey(i){

    }


    heapify(i){

    }




toString(){

    var res = this.store.slice(0,this.size);
    
    return res.map(node => node.toString()).toString();
    
    
}

}
