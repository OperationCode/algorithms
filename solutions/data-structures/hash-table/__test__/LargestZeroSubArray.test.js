import { largestZeroSubArray  } from '../LargestZeroSubArray'


describe('largestZeroSubArray', () => {
  it('should compute example ', () => {
   
    expect( largestZeroSubArray( [15, -2, 2, -8, 1, 7, 10, 23])).toBe(5);

      });

       it('should return null for empty array ', () => {
   
    expect( largestZeroSubArray( [])).toBeNull();

      });

     it('should return 0 for stricly positive elements in array ', () => {
   
    expect( largestZeroSubArray( [1,2,3,4,5,6,7])).toBe(0);

      });


});

