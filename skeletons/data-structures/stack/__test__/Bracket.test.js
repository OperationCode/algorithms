import Stack from '../Stack';

import { bracketMatch }  from  '../BracketMatching';


describe('Bracket', () => {
  it('should match simple patterns', () => {
  
   expect( bracketMatch("(())") ).toBeTruthy();
   expect( bracketMatch("(()") ).toBeFalsy();
   expect( bracketMatch("())") ).toBeFalsy();
   expect( bracketMatch("((a)a") ).toBeFalsy();
   expect( bracketMatch("1(1(2)3)1") ).toBeTruthy();
   expect( bracketMatch("a(b)c(d)e") ).toBeTruthy();

   expect(    bracketMatch('{ac[bb]}')).toBeTruthy();
   expect (bracketMatch('[dklf(df(kl))d]{}') ).toBeTruthy();
   expect(  bracketMatch('{[[[]]]}') ).toBeTruthy();
   expect(  bracketMatch('{3234[fd') ).toBeFalsy();
   expect(  bracketMatch('{df][d}') ).toBeFalsy();
   expect(  bracketMatch('([)]') ).toBeFalsy();

  });

});

