
import BinaryTreeNode from '../BinaryTreeNode';
import BinaryTree from '../BinaryTree';

import {  preOrderIterative } from '../PreOrderIterative';



describe(' PreOrderIterative ', () => {

 
 it('should traverse a  BinaryTree in Order.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     const tree = new BinaryTree();
     tree.store = node4;
     
     var res = [];

     preOrderIterative( tree, a => { res.push(a.value);});

     expect( res.toString()).toBe('4,2,1,3,5');
});

});
