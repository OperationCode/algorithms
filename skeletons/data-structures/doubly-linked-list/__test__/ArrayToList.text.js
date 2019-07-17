
import { arrayToList }  from  '../ArrayToList';


describe('ArrayToList', () => {
  it('should turn arrays to lists ', () => {


    expect( arrayToList( [ 1, 2,3] ).toString()).toBe('3');
 
});

});

