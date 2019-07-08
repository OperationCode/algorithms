import { mostFrequent  } from '../MostFrequent'


describe('mostFrequent', () => {
  it('should find  most frequent of example ', () => {
   
    expect( mostFrequent( [1,2,3,4,3,2,2])).toBe(2);

      });

      it('should return undefined for empty array ', () => {
   
    expect( mostFrequent( [])).toBeUndefined;

      });

     it('should return value for singleton  array ', () => {
   
    expect( mostFrequent( [1])).toBe(1);

      });
   
    it('should return first element for array without duplicates ', () => {
   
    expect( mostFrequent( [1,2,3,4])).toBe(1);

      });

      it('should return 1 for array with many 1s ', () => {
   
    expect( mostFrequent( [1,1,1,1,1,1,1,1])).toBe(1);
	  
      });
});
