import { findDuplicates, countDuplicates } from '../FindDuplicates'


describe('findDuplicates', () => {
  it('should find duplictes of example ', () => {
   
    expect( findDuplicates( [1,2,3,4,3,2,2]).toString()).toBe('3,2');

      });

      it('should return [] for empty array ', () => {
   
    expect( findDuplicates( []).toString()).toBe('');

      });

     it('should return [] for singleton  array ', () => {
   
    expect( findDuplicates( [1]).toString()).toBe('');

      });
   
    it('should return [] for array without duplicates ', () => {
   
    expect( findDuplicates( [1,2,3,4]).toString()).toBe('');

      });

      it('should return [1] for array with many 1s ', () => {
   
    expect( findDuplicates( [1,1,1,1,1,1,1,1]).toString()).toBe('1');
	  
      });

});


describe('countDuplicates', () => {
  it('should count duplictes of example ', () => {
   
    expect( countDuplicates( [1,2,3,4,3,2,2])).toBe(2);

      });

      it('should return 0 for empty array ', () => {
   
    expect( countDuplicates( [])).toBe(0);

      });

     it('should return 0 for singleton  array ', () => {
   
    expect( countDuplicates( [1])).toBe(0);

      });
   
    it('should return 0 for array without duplicates ', () => {
   
    expect( countDuplicates( [1,2,3,4])).toBe(0);

      });

      it('should return 1 for array with many 1s ', () => {
   
    expect( countDuplicates( [1,1,1,1,1,1,1,1])).toBe(1);

      });

});

