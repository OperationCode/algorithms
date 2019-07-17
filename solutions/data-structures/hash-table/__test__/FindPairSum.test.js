import { findPairSum, countPairSum } from '../FindPairSum'


describe('findPairSum', () => {
  it('should find pair ', () => {
   
    expect( findPairSum( [1,2,3,4],6).toString()).toBe('2,4');

      });

  it('should return null when no pair ', () => {
   
    expect( findPairSum( [1,2,3,4],19)).toBeNull;

      });
    
 it('should return null on empty and singleton ', () => {
   
    expect( findPairSum( [],1)).toBeNull;

     expect( findPairSum( [1],1)).toBeNull;
      });



});


describe('countPairSum', () => {
  it('should count a pair ', () => {
   
    expect( countPairSum( [1,2,3,4],6)).toBe(1);

      });

  it('should count more than one pair  ', () => {
   
    expect( countPairSum( [1,2,3,4],5)).toBe(2);

      });
    
 it('should return n0 on empty and singleton ', () => {
   
    expect( countPairSum( [],1)).toBe(0);

     expect( countPairSum( [1],1)).toBe(0);
      });



});

