import {  isHappyConstantSpace,  isHappy, digitSquareSum } from '../Happy';


describe('digitSquareSum', () => {
  it('should sum the square of digits corrected', () => {

      expect(digitSquareSum(1)).toBe(1); 
      expect(digitSquareSum(2)).toBe(4);  
      expect(digitSquareSum(3)).toBe(9);
      expect(digitSquareSum(34)).toBe(25);

});

    
  it('should test of numbers are happy correctly', () => {
      expect(isHappy(1)).toBeTruthy(); 
      expect(isHappy(2)).toBeFalsy(); 
      expect(isHappy(3)).toBeFalsy(); 
      expect(isHappy(4)).toBeFalsy(); 
      expect(isHappy(19)).toBeTruthy(); 
      expect(isHappy(310)).toBeTruthy(); 
      expect(isHappy(622)).toBeTruthy(); 
      expect(isHappy(881)).toBeTruthy(); 
      expect(isHappy(44)).toBeTruthy(); 
      expect(isHappy(236)).toBeTruthy(); 
      expect(isHappy(314)).toBeFalsy(); 
      expect(isHappy(624)).toBeFalsy(); 
      expect(isHappy(834)).toBeFalsy(); 
      expect(isHappy(328)).toBeFalsy(); 
      expect(isHappy(819)).toBeFalsy();  
      
      });


  it('should test of numbers are happy with constant space correctly', () => {
      expect(isHappyConstantSpace(1)).toBeTruthy(); 
      expect(isHappyConstantSpace(2)).toBeFalsy(); 
      expect(isHappyConstantSpace(3)).toBeFalsy(); 
      expect(isHappyConstantSpace(4)).toBeFalsy(); 
      expect(isHappy(19)).toBeTruthy(); 
      expect(isHappy(310)).toBeTruthy(); 
      expect(isHappy(622)).toBeTruthy(); 
      expect(isHappy(881)).toBeTruthy(); 
      expect(isHappy(44)).toBeTruthy(); 
      expect(isHappy(236)).toBeTruthy(); 
      expect(isHappy(314)).toBeFalsy(); 
      expect(isHappy(624)).toBeFalsy(); 
      expect(isHappy(834)).toBeFalsy(); 
      expect(isHappy(328)).toBeFalsy(); 
      expect(isHappy(819)).toBeFalsy();  
      
      });


});
