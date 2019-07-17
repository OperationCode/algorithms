
import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  it('should create empty BinaryTreeNode', () => {
    const node = new BinaryTreeNode();
    expect( node).not.toBeUndefined();
    expect( node  ).not.toBeUndefined();
  });


 it('should create  BinaryTreeNode with a value', () => {

    const node = new BinaryTreeNode(1);
    expect( node ).not.toBeUndefined();
    expect( node.value ).toBe(1);
    expect( node.left ).toBeNull();
    expect( node.right ).toBeNull();
});


 it('should traverse a  BinaryTreeNode in Order.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     expect( node1 ).not.toBeUndefined();
     expect( node1.value ).toBe(1);
     expect( node4.toString()).toBe('1,2,3,4,5');
});



 it('should traverse a  BinaryTreeNode in post Order.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     expect( node1 ).not.toBeUndefined();
     expect( node1.value ).toBe(1);

     var res =  [];
     node4.postOrder(a => {
	 res.push(a.value);} );


     expect( res.toString()).toBe('1,3,2,5,4');
});


 it('should traverse a  BinaryTreeNode in preOrder.', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node5= new BinaryTreeNode(5);
     const node4 = new BinaryTreeNode(4,node2,node5);

     expect( node1 ).not.toBeUndefined();
     expect( node1.value ).toBe(1);

     var res =  [];
     node4.preOrder(a => {
	 res.push(a.value);} );

     expect(res.toString()).toBe('4,2,1,3,5');
});



 it('should count the numbers of nodes of   BinaryTreeNodes', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);

     expect(node4.numberOfNodes()).toBe(6);
     expect(node3.numberOfNodes()).toBe(1);
     expect(node2.numberOfNodes()).toBe(3);
     expect(node1.numberOfNodes()).toBe(1);
     expect(node5.numberOfNodes()).toBe(2);
     expect(node6.numberOfNodes()).toBe(1);

});




 it('should count the numbers of leaves of   BinaryTreeNodes', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.numberOfLeaves()).toBe(3);
     expect(node3.numberOfLeaves()).toBe(1);
     expect(node2.numberOfLeaves()).toBe(2);
     expect(node1.numberOfLeaves()).toBe(1);
     expect(node5.numberOfLeaves()).toBe(1);
     expect(node6.numberOfLeaves()).toBe(1);

});



 it('should compute the height BinaryTreeNodes', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.height()).toBe(3);
     expect(node3.height()).toBe(1);
     expect(node2.height()).toBe(2);
     expect(node1.height()).toBe(1);
     expect(node5.height()).toBe(2);
     expect(node6.height()).toBe(1);

});




 it('should check is a  BinaryTreeNode is balanced', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     const node7= new BinaryTreeNode(7);
     const node6= new BinaryTreeNode(6,null, node7);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.balanced()).toBeFalsy();
     expect(node3.balanced()).toBeTruthy();
     expect(node2.balanced()).toBeTruthy();
     expect(node1.balanced()).toBeTruthy();
     expect(node5.balanced()).toBeFalsy();
     expect(node6.balanced()).toBeTruthy(); 
     expect(node7.balanced()).toBeTruthy(); 

});


it('should check is a  BinaryTreeNode is degenerate', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.degenerate()).toBeFalsy();
     expect(node3.degenerate()).toBeTruthy();
     expect(node2.degenerate()).toBeFalsy();
     expect(node1.degenerate()).toBeTruthy();
     expect(node5.degenerate()).toBeTruthy();
     expect(node6.degenerate()).toBeTruthy();

});


it('should check is a  BinaryTreeNode is perfect', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
     const node5= new BinaryTreeNode(5, null, node6);
     const node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.perfect()).toBeFalsy();
     expect(node3.perfect()).toBeTruthy();
     expect(node2.perfect()).toBeTruthy();
     expect(node1.perfect()).toBeTruthy();
     expect(node5.perfect()).toBeFalsy();
     expect(node6.perfect()).toBeTruthy();

});



it('should check is a  BinaryTreeNode is complete', () => {

    const node1 = new BinaryTreeNode(1);
     const node3 = new BinaryTreeNode(3);
     const node2 = new BinaryTreeNode(2,node1,node3);
     
     const node6= new BinaryTreeNode(6);
    var node5= new BinaryTreeNode(5, null, node6);
     var node4 = new BinaryTreeNode(4,node2,node5);
     
     expect(node4.complete()).toBeFalsy();
     expect(node3.complete()).toBeTruthy();
     expect(node2.complete()).toBeTruthy();
     expect(node1.complete()).toBeTruthy();
     expect(node5.complete()).toBeFalsy();
     expect(node6.complete()).toBeTruthy();

    node5 = new BinaryTreeNode(5, node6,null);
     node4 = new BinaryTreeNode(4,node2,node5);
    
    expect(node4.complete()).toBeTruthy();
    console.log("Trying 5");

    expect(node5.complete()).toBeTruthy();

});



});
