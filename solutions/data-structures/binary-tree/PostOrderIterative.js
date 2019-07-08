

import BinaryTreeNode from './BinaryTreeNode';
import Stack from './../stack/Stack';


export function  postOrderIterative(tree,callback){


    var node = tree.store;
    var st = new Stack();
  
    while (node || !st.isEmpty() ) 
    { 
        while (node) 
        { 
            // Push node's right child and then node to stack. 
            if (node.right) 
                st.push(node.right); 
            st.push(node); 
  
            // Set node as node's left child   
            node = node.left; 
        }
  
        // Pop an item from stack and set it as node     
        node = st.pop(); 
  
        // If the popped item has a right child and the right child is not 
        // processed yet, then make sure right child is processed before node 
        if (node.right && st.peek() === node.right) 
        { 
            st.pop(st);  // remove right child from stack 
            st.push(node);  // push node back to stack 
            node = node.right; // change node so that the right  
                                // child is processed next 
        } 
        else 
        { 
            callback(node);
            node = null; 
        } 
    }
}








