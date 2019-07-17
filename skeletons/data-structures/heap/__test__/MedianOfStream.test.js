import { median }  from '../MedianOfStream';




describe(' Median ', () => {

 
 it('should track the median.', () => {

     expect(median([1,2,3,4,5,6,7,8,9]).toString() ).toBe('1,1.5,2,2.5,3,3.5,4,4.5,5');
     
     });


 it('should track the median when items are out of order.', () => {

  expect(median([1,10,3,4,10,6,10,8,9]).toString() ).toBe('1,5.5,3,3.5,4,5,6,7,8');
  
});

it('should track the median when many items are equal.', () => {

 
 expect(median([1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3]).toString() ).toBe('1,1,1,1,1,1,1,1,1,1,1,1,1,1.5,2,2,2,2,2,2,2,2,2,2,2,2,2');
   
  
});

});

