

import { insert }  from  '../Insert';
import { arrayToList }  from  '../ArrayToList';

describe('Insert', () => {
  it('should insert into a sorted list ', () => {


      expect( insert(  arrayToList([ 1, 3,5 ]) ,  4 , function(a, b){return a.value < b.value;}  ).toString()).toBe('1,3,4,5');

      expect( insert(  arrayToList([ 1, 3,4 ]) ,  5 , (a, b) => {return a.value < b.value;}  ).toString()).toBe('1,3,4,5');
      

      expect( insert(  arrayToList([ 1, 3]) ,  5 , function(a, b){return a.value < b.value;}  ).toString()).toBe('1,3,5');
      expect( insert(  arrayToList([  3,5,6 ]) , 1 , function(a, b){return a.value < b.value;}  ).toString()).toBe('1,3,5,6');

});
  it('should insert  into an empty list ', () => {
  expect( insert(  arrayToList([ ]) ,  1,  function(a, b){return a.value < b.value;}  ).toString()).toBe('1');

});



}); 

 
