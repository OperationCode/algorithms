

import BinaryTreeNode from './BinaryTreeNode';

export default class BinaryTree {
  constructor() {
      this.store = new BinaryTreeNode();
  }




//Traverse the tree in-order and call callback on the value of each node.

 inOrder(callback){
    var node = this.store;
     node.inOrder(callback);
     return;

}


 postOrder(callback){

     var node = this.store;
     node.postOrder(callback);
     return;

}



 preOrder(callback){

     var node = this.store;
     node.preOrder(callback);
     return;

}


numberOfNodes(){
   var count = 0;
   this.inOrder( a => { count++;})
  return count; 
}

numberOfLeaves(){
   var count = 0;
   this.inOrder( a => { if (!a.left && !a.right) count++;})
  return count; 
}

// use a call back that 

height(){
    return this.store.height();
}

    numberOfLeaves(){
	return this.store.numberOfLeaves()
}

numberOfNodes(){
    return this.store.numberOfNodes()
}


balanced(){
    return this.store.balanced()
}


degenerate(){
    return this.store.degenerate()
}

perfect(){
    return this.store.perfect()
}

complete(){
    return this.store.complete();
}



 toString(){
     // traverse in order
     var res =  [];
     this.inOrder(a => { res.push(a.value);} );
     return res.toString();
 }

}

