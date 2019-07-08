
export default class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }


//Traverse the nodes in-order and call callback on the value of each node.
 inOrder(callback){
    if (this.left) this.left.inOrder(callback);
     callback(this);
     if(this.right) this.right.inOrder(callback);
     return;
}



preOrder(callback){
     callback(this);
     if(this.left) this.left.preOrder(callback);
     if(this.right) this.right.preOrder(callback);
     return;
}

postOrder(callback){
    if(this.left) this.left.postOrder(callback);
     if(this.right) this.right.postOrder(callback);
     callback(this);
     return;
}


height(){
    if (!this.left &&  !this.right) return 1;
    if (!this.right)  return 1 +  this.left.height();
    if (!this.left)  return 1 + this.right.height();
    return 1 + Math.max(this.left.height()  ,  this.right.height() ) ;

}

numberOfLeaves(){
    if (!this.left || !this.right) return 1;
    if (!this.left)  return this.right.numberOfLeaves();
    if (!this.right)  return this.left.numberOfLeaves();
    return this.left.numberOfLeaves()   +  this.right.numberOfLeaves(); 
}

numberOfNodes(){
    if (!this.left &&  !this.right) return 1;
     if (!this.left)  return 1 +  this.right.numberOfNodes();
    if (!this.right)  return 1 + this.left.numberOfNodes();
    return 1+ this.left.numberOfNodes()   +  this.right.numberOfNodes(); 
}


balanced(){

// A binary tree is balanced if the heights of subtrees never differ by more than one.
   if (this.balancedHeight()) return true;
    return false;
  
}


balancedHeight(){

    // we return the hieght of the tree if it is balanced, otherwise we return false;
    if (!this.left &&  !this.right) return 1;
    if (!this.left) return 1 === this.right.height();
    if (!this.right) return 1 === this.left.height();
    
    const h1 = this.left.balancedHeight();
    const h2 = this.right.balancedHeight();
    
    if (h1 && h2 && h1 -h2 <= 1 && h2 -h1 <=1) return 1 + Math.max(h1,h2);
    return false;
}


degenerate(){
    if (this.numberOfNodes() === this.height()) return true;
    return false;
}

perfect(){
 // a binary tree is perfect if its sub trees are perfect, and the same height
    // the empty subtree is balanced.
    if (!this.left &&  !this.right) return true;
    if ( !this.left ||  !this.right) return false;
    if (this.left.height() == this.right.height() && 
	this.left.perfect() && this.right.perfect() ) return true;
    
    return false;
}


complete(){
    
    // A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible

    // We can check this by seeing if the height is greater than the 1+ log(n) where n is the number of nodes, and recursively checking that the right is never set when thre left is not.

    // if there are 7 nodes or less, the height should be 3 or less.  
    // if there are 8 nodes, the height can be 4.
    // 

    const h = this.height();
    const numNodes = this.numberOfNodes();
    if (h >   Math.log2(numNodes) +1 ){
	return false ;
    }
    var incomplete = false;
    this.inOrder(a => { if (a.right && !a.left){
	incomplete = true;} } );
    return !incomplete;
}

 toString(){
     // traverse in order
     var res =  [];
     this.inOrder(a => {
	 res.push(a.value);} );
     return res.toString();
     
 }


//  toString(callback) {
 //   return callback ? callback(this.value) : `${this.value}`;
 // }
}
