

import { merge }  from  '../MergeDLL';
import { arrayToList }  from  '../ArrayToList';

describe('Merge', () => {
  it('should merge into a sorted list ', () => {


      expect( merge(  arrayToList([ 1, 3,5 ]) ,   arrayToList([ 2, 4,6 ])  , function(a, b){return a.value < b.value;}  ).toString()).toBe('1,2,3,4,5,6');

      expect( merge(  arrayToList([ 1, 3]) ,    arrayToList([ ]) , function(a, b){return a.value < b.value;}  ).toString()).toBe('1,3');
      expect( merge(  arrayToList([ ]),  arrayToList([  3,5,6 ])   , function(a, b){return a.value < b.value;}  ).toString()).toBe('3,5,6');

});
  it('should merge  into an empty list ', () => {
  expect( merge(  arrayToList([ ]) , arrayToList([  3,5,6 ])   ,  function(a, b){return a.value < b.value;}  ).toString()).toBe('3,5,6');

});



}); 

 
