
import BinaryTreeNode from '../BinaryTreeNode';
import BinaryTree from '../BinaryTree';

describe('BinaryTreeNode', () => {
  it('should create empty BinaryTreeNode', () => {
    const node = new BinaryTree();
    expect( node).not.toBeUndefined();
    expect( node  ).not.toBeUndefined();
  });


 
 it('should traverse a  BinaryTree in Order.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     const tree = new BinaryTree();
     tree.store = node4;
     
     expect( tree.toString()).toBe('1,2,3,4,5');
});



 it('should traverse a  BinaryTree  in post Order.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     
     const tree = new BinaryTree();
     tree.store = node4;
     
     var res =  [];
     tree.postOrder(a => {
	 res.push(a.value);} );

    

     expect( res.toString()).toBe('1,3,2,5,4');
});


 it('should traverse a  BinaryTree in preOrder.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);
     const tree = new BinaryTree();
     tree.store = node4;
     


     var res =  [];
     tree.preOrder(a => {
	 res.push(a.value);} );

     expect(res.toString()).toBe('4,2,1,3,5');
});



 it('should count the numbers of nodes of   BinaryTree' , () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);

     const tree = new BinaryTree();
     tree.store = node4;
     

     expect(tree.numberOfNodes()).toBe(6);
   

});




 it('should count the numbers of leaves of   BinaryTree', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);

     const tree = new BinaryTree();
     tree.store = node4;

     
     expect(tree.numberOfLeaves()).toBe(3);


});



 it('should compute the height of a  BinaryTree ', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     const tree = new BinaryTree();
     tree.store = node4;
     
     expect(tree.height()).toBe(3);
    

});




 it('should check is a  BinaryTree is balanced', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node7= new BinaryTreeNode(7);
     const node6= new BinaryTreeNode(6,null, node7);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
      const tree = new BinaryTree();
     tree.store = node4;
     
     expect(node4.balanced()).toBeFalsy();
     
});


it('should check is a  BinaryTree is degenerate', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
    const node4 = new BinaryTreeNode(4,node2,node5);
    const tree = new BinaryTree();
    tree.store = node4;
      const tree1 = new BinaryTree();
    tree1.store = node5;
    
     expect(tree.degenerate()).toBeFalsy();
    expect(tree1.degenerate()).toBeTruthy();

});


it('should check is a  BinaryTree  is perfect', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
    
    const tree = new BinaryTree();
    tree.store = node4;
    const tree1 = new BinaryTree();
    tree1.store = node3;
    
    expect(tree.perfect()).toBeFalsy();
    expect(tree1.perfect()).toBeTruthy();
    

});



it('should check is a  BinaryTree is complete', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
    var node5= new BinaryTreeNode(5, null, node6);
     var node4 = new BinaryTreeNode(4,node2,node5);
     
    var tree = new BinaryTree();
    tree.store = node4;
    const tree1 = new BinaryTree();
    tree1.store = node3;
    
     expect(tree.complete()).toBeFalsy();
     expect(tree1.complete()).toBeTruthy();
    

    node5 = new BinaryTreeNode(5, node6,null);
    node4 = new BinaryTreeNode(4,node2,node5);
    tree.store = node4;


    expect(tree.complete()).toBeTruthy();
   

});



});
