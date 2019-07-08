
import { mergeNSortedArrays } from '../MergeNSortedArrays'

describe(' MergeNSortedArrays ', () => {

 
 it('should merge n arrays no interleaving  ', () => {

     expect( mergeNSortedArrays( [ [1,2,3], [4,5,6]]).toString()).toBe('1,2,3,4,5,6');



     });


 it('should merge n arrays nterleaving  ', () => {

     expect( mergeNSortedArrays( [ [1,3,5], [2,4,6]]).toString()).toBe('1,2,3,4,5,6');



     });



 it('should merge n arrays n > 3   ', () => {

     expect( mergeNSortedArrays( [ [1,5,9], [2,6,10],[3,7,11],[4,8,12]  ]).toString()).toBe('1,2,3,4,5,6,7,8,9,10,11,12');



     });


 it('should merge n arrays different lengths  ', () => {

     expect( mergeNSortedArrays( [ [1,5,9,15,18], [2,6,10],[3,7,11,13],[4,8,12]  ]).toString()).toBe('1,2,3,4,5,6,7,8,9,10,11,12,13,15,18');



     });


});
