
import { arrayToList }  from  '../ArrayToList';


describe('ArrayToList', () => {
  it('should turn arrays to lists ', () => {


    expect( arrayToList( [ 1, 2,3] ).toString()).toBe('1,2,3');

   expect( arrayToList( [ ] ).toString()).toBe('');

   expect( arrayToList( [1 ] ).toString()).toBe('1');

   expect( arrayToList( [1 ,1] ).toString()).toBe('1,1');
});

});

