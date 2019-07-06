
import { reverseDLL , reverseInPlace }  from  '../Reverse';
import { arrayToList }  from  '../ArrayToList';

describe('Reverse', () => {
  it('should reverse list ', () => {


    expect( reverseDLL(  arrayToList([ 1, 2,3]) ).toString()).toBe('3,2,1');

   expect( reverseDLL( arrayToList( [ ] )).toString()).toBe('');

   expect( reverseDLL( arrayToList( [1 ] )).toString()).toBe('1');

   expect( reverseDLL(  arrayToList([1 ,1]) ).toString()).toBe('1,1');

}); 

  it('should reverse list in place ', () => {

  expect( reverseInPlace(  arrayToList([ 1, 2,3]) ).toString()).toBe('3,2,1');

   expect( reverseInPlace( arrayToList( [ ] )).toString()).toBe('');

   expect( reverseInPlace( arrayToList( [1 ] )).toString()).toBe('1');

   expect( reverseInPlace(  arrayToList([1 ,1]) ).toString()).toBe('1,1');
});

});

