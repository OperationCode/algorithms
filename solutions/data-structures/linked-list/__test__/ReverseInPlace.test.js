import { arrayToLinkedList }  from  '../ArrayToLinkedList';
import LinkedList from '../LinkedList';
import { reverseInPlace, reverse  }  from  '../ReverseInPlace';



describe('ReverseInPlace', () => {
  it(' lists should reverse in place  ', () => {
      expect( reverseInPlace( arrayToLinkedList( [ 1, 2,3] ) ).toString() ).toBe('3,2,1'); 
    
      expect( reverseInPlace( arrayToLinkedList( [ 1] ) ).toString() ).toBe('1'); 

      expect( reverseInPlace( arrayToLinkedList( [ ] ) ).toString() ).toBe(''); 
    
  });

  it(' lists should reverse  ', () => {
      expect( reverse( arrayToLinkedList( [ 1, 2,3] ) ).toString() ).toBe('3,2,1'); 
    
      expect( reverse( arrayToLinkedList( [ 1] ) ).toString() ).toBe('1'); 

      expect( reverse( arrayToLinkedList( [ ] ) ).toString() ).toBe(''); 
    
  });

});
