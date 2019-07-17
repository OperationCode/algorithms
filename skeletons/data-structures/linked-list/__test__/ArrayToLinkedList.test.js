import { arrayToLinkedList }  from  '../ArrayToLinkedList';
import LinkedList from '../LinkedList';


describe('ArrayToLinkedList', () => {
  it('Linked Lists should work ', () => {
  const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1,2');
      
});

 it('should turn arrays to lists ', () => {
    expect( arrayToLinkedList( [ 1, 2,3] ).toString()).toBe('1,2,3');

   expect( arrayToLinkedList( [ ] ).toString()).toBe('');

   expect( arrayToLinkedList( [1 ] ).toString()).toBe('1');

   expect( arrayToLinkedList( [1 ,1] ).toString()).toBe('1,1');
});

});
