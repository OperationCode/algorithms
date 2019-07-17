import { arrayToLinkedList }  from  '../ArrayToLinkedList';
import LinkedList from '../LinkedList';
import { findLoop }  from  '../FindLoop';



describe('FindLoop', () => {
  it('non loops should return false ', () => {


      expect( findLoop( arrayToLinkedList( [ 1, 2,3] ) )).toBeFalsy(); 

      expect( findLoop( arrayToLinkedList( [ 1] ) )).toBeFalsy(); 

      expect( findLoop( arrayToLinkedList( [ ] ) )).toBeFalsy(); 


});


   it(' loops should return true ', () => {
      var ll = new LinkedList();
      ll.append(1);  
      ll.append(2);  
      ll.append(3);  
      ll.append(4);  
      
     /*
  ll.tail.next = ll.head;
       expect( arrayToLinkedList(ll )).toBeTruthy();

       ll.head.next = ll.head;
       expect( arrayToLinkedList(ll )).toBeTruthy();
*/
 


});

});
