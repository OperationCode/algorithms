import { fermatPrimality }  from '../FermatPrimality';



describe('Fermat Test', () => {
  it('should detect prime numbers', () => {
    
 expect(fermatPrimality(1)).toBeFalsy();
  expect(fermatPrimality(2)).toBeTruthy();
  expect(fermatPrimality(3)).toBeTruthy();
  expect(fermatPrimality(5)).toBeTruthy();
  expect(fermatPrimality(11)).toBeTruthy();
  expect(fermatPrimality(191)).toBeTruthy();
  expect(fermatPrimality(191)).toBeTruthy();
  expect(fermatPrimality(199)).toBeTruthy();

  expect(fermatPrimality(4)).toBeFalsy();
  expect(fermatPrimality(6)).toBeFalsy();
  expect(fermatPrimality(12)).toBeFalsy();
  expect(fermatPrimality(14)).toBeFalsy();
  expect(fermatPrimality(25)).toBeFalsy();
  expect(fermatPrimality(192)).toBeFalsy();
  expect(fermatPrimality(200)).toBeFalsy();
  expect(fermatPrimality(400)).toBeFalsy();

 

  });
});
