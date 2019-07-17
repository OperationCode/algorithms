

import {  largestConsecutiveSubsequence  } from '../largestConsecutiveSequence'


describe(' largestConsecutiveSubsequence' , () => {
  it('should find example ', () => {
   
    expect(  largestConsecutiveSubsequence( [1, 9, 3, 10, 4, 20, 2])).toBe(4);

      });



 it('should find examples with 0 an an element ', () => {
   
    expect(  largestConsecutiveSubsequence( [1, 9, 3, 10, 4, 20, 2,0,-1,-3 ])).toBe(6);

      });




 it('should return 0 for empty array  ', () => {
   
    expect(  largestConsecutiveSubsequence( [ ])).toBe(0);

      });




 it('should return 1 for singleton array  ', () => {
   
    expect(  largestConsecutiveSubsequence( [ 12])).toBe(1);

      });


});

