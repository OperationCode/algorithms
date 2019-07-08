

import BinaryTreeNode from './BinaryTreeNode';
import Stack from './../stack/Stack';


export function inOrderIterative(tree,callback){


    var node = tree.store;
    var st = new Stack();
  
    while (node || !st.isEmpty() ) 
    { 
        /* Reach the leftmost node of the 
           curr */
     while (node !==  null) 
        { 
            /* place tree node on 
               the stack before traversing 
              the node's left subtree */
            st.push(node); 
            node = node.left; 
        } 
  
        /* Node  must be NULL at this point */
        node = st.pop(); 
  
       callback(node);
  
        /* we have visited the node and its 
           left subtree.  Now, it is the right 
           subtree's turn */
        node = node.right; 
  
    }
}








