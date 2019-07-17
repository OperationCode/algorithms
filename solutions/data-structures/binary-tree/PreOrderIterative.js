f

import BinaryTreeNode from './BinaryTreeNode';
import Stack from './../stack/Stack';


export function  preOrderIterative(tree,callback){


    var node = tree.store;
    var st = new Stack();
    if (!node) 
       return; 
  
   
    st.push(node); 
  
    /* Pop all items one by one. Do following for every popped item 
       a) callback 
       b) push its right child 
       c) push its left child 
    Note that right child is pushed first so that left is processed first */
    while (!st.isEmpty() ) 
    { 
        // Pop the top item from stack 
        node =   st.pop(); 
	// callback
	callback(node); 
       
  
        // Push right and left children of the popped node to stack 
        if (node.right) 
            st.push(node.right); 
        if (node.left) 
            st.push(node.left); 
    }
    
}








