import { smallestValue }  from  '../SmallestValue';
import { arrayToList }  from  '../ArrayToList';


describe('SmallestValue', () => {
  it('should find smallets value in a list ', () => {


    expect( smallestValue( arrayToList( [ 1, 2]) ).toString()).toBe('1');
    expect( smallestValue( arrayToList( [ ]) )).toBeNull();
    expect( smallestValue( arrayToList( [ 1, 1]) ).toString()).toBe('1');
    expect( smallestValue( arrayToList( [ -1,1, 2]) ).toString()).toBe('-1');
    expect( smallestValue( arrayToList( [ -1, -2]) ).toString()).toBe('-2');
   
});

});

