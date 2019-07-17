import { isUgly, nthUglyNumber,  nthUglyNumberLinear, superUglyNumber  } from '../Ugly';


describe('ugly', () => {
  it('should test ugly numbers correctly', () => {
      expect(isUgly(1)).toBeTruthy();
      expect(isUgly(2)).toBeTruthy();
      expect(isUgly(3)).toBeTruthy();
      expect(isUgly(5)).toBeTruthy();
      expect(isUgly(15)).toBeTruthy();
      expect(isUgly(30)).toBeTruthy();
      expect(isUgly(120)).toBeTruthy();
      expect(isUgly(360)).toBeTruthy();
      expect(isUgly(7)).toBeFalsy();
      expect(isUgly(14)).toBeFalsy();
      expect(isUgly(33)).toBeFalsy();
      expect(isUgly(22)).toBeFalsy();
      expect(isUgly(420)).toBeFalsy();
      expect(isUgly(17)).toBeFalsy();
      expect(isUgly(34)).toBeFalsy();
      
      });


  it('should compute nth ugly numbers correctly', () => {
      expect(nthUglyNumber(0)).toBeFalsy();  //1,2,3,4,5,6,8,9,10,12,15,16,18,
      
 expect(nthUglyNumber(1)).toBe(1);
 expect(nthUglyNumber(2)).toBe(2);
 expect(nthUglyNumber(3)).toBe(3);
 expect(nthUglyNumber(4)).toBe(4);
 expect(nthUglyNumber(5)).toBe(5);
 expect(nthUglyNumber(6)).toBe(6);
 expect(nthUglyNumber(7)).toBe(8);
 expect(nthUglyNumber(8)).toBe(9);
 expect(nthUglyNumber(9)).toBe(10);
 expect(nthUglyNumber(10)).toBe(12);
 expect(nthUglyNumber(11)).toBe(15);
 expect(nthUglyNumber(12)).toBe(16);
      expect(nthUglyNumber(100)).toBe(1536);
      
      });



  it('should compute nth ugly numbers in linear time correctly', () => {
      expect(nthUglyNumber(0)).toBeFalsy();  //1,2,3,4,5,6,8,9,10,12,15,16,18,
      
      expect(nthUglyNumberLinear(1)).toBe(1);
      expect(nthUglyNumberLinear(2)).toBe(2);
      expect(nthUglyNumberLinear(3)).toBe(3);
      expect(nthUglyNumberLinear(4)).toBe(4);
      expect(nthUglyNumberLinear(5)).toBe(5);
      expect(nthUglyNumberLinear(6)).toBe(6);
      expect(nthUglyNumberLinear(7)).toBe(8);
      expect(nthUglyNumberLinear(8)).toBe(9);
      expect(nthUglyNumberLinear(9)).toBe(10);
      expect(nthUglyNumberLinear(10)).toBe(12);
      expect(nthUglyNumberLinear(11)).toBe(15);
      expect(nthUglyNumberLinear(12)).toBe(16);
      expect(nthUglyNumberLinear(100)).toBe(1536);
      
  });




  it('should compute nth ugly numbers in linear time correctly', () => {
    

      expect(superUglyNumber(10,[2,3,5])).toBe(12);
      expect(superUglyNumber(100,[2,3,5])).toBe(1536);
      

      expect(superUglyNumber(10,[2,3,7])).toBe(14);  //1,2,3,4,6,7,8,9,12,14,16,
  });


});
