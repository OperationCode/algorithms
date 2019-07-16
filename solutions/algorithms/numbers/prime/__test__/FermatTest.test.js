import { fermatTest }  from '../FermatTest';



describe('Fermat Test', () => {
  it('should detect prime numbers', () => {
    
 expect(fermatTest(1)).toBeFalsy();
  expect(fermatTest(2)).toBeTruthy();
  expect(fermatTest(3)).toBeTruthy();
  expect(fermatTest(5)).toBeTruthy();
  expect(fermatTest(11)).toBeTruthy();
  expect(fermatTest(191)).toBeTruthy();
  expect(fermatTest(191)).toBeTruthy();
  expect(fermatTest(199)).toBeTruthy();

  expect(fermatTest(4)).toBeFalsy();
  expect(fermatTest(6)).toBeFalsy();
  expect(fermatTest(12)).toBeFalsy();
  expect(fermatTest(14)).toBeFalsy();
  expect(fermatTest(25)).toBeFalsy();
  expect(fermatTest(192)).toBeFalsy();
  expect(fermatTest(200)).toBeFalsy();
  expect(fermatTest(400)).toBeFalsy();

 

  });
});
