import { arrayToLinkedList }  from  '../ArrayToLinkedList';
import LinkedList from '../LinkedList';
import { palindrome, palindromeInPlace }  from  '../Palindrome';



describe('ReverseInPlace', () => {
  it(' Check Palindromes  ', () => {
     

      expect( palindrome( arrayToLinkedList( [ 1, 2,1] ) )).toBeTruthy(); 

      expect( palindrome( arrayToLinkedList( [ 1, 2,2,1] ) )).toBeTruthy(); 
      
    
      expect( palindrome( arrayToLinkedList( [ 1, 2,3 ] ) )).toBeFalsy(); 
      

});

 it(' Check single and empty Palindromes  ', () => {
      expect( palindrome( arrayToLinkedList( [ 1] ) )).toBeTruthy();

      expect( palindrome( arrayToLinkedList( [ ] ))).toBeTruthy();
  });


 it(' Check Palindromes  ', () => {
     

      expect( palindromeInPlace( arrayToLinkedList( [ 1, 2,1] ) )).toBeTruthy(); 

      expect( palindromeInPlace( arrayToLinkedList( [ 1, 2,2,1] ) )).toBeTruthy(); 
      
    
      expect( palindromeInPlace( arrayToLinkedList( [ 1, 2,3 ] ) )).toBeFalsy(); 
      

});

 it(' Check single and empty Palindromes  ', () => {
      expect( palindromeInPlace( arrayToLinkedList( [ 1] ) )).toBeTruthy();

      expect( palindromeInPlace( arrayToLinkedList( [ ] ))).toBeTruthy();
  });


});
