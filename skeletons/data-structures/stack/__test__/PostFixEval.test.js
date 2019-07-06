import Stack from '../Stack';

import { evalPostFix }  from  '../PostFixEval';


describe('PostFixEval', () => {
  it('should eval postfix ', () => {


    expect( evalPostFix( [ 1, 2,'+'] ).toString()).toBe('3');
    expect( evalPostFix( [ 1, 2, 3,'+','+'] ).toString()).toBe('6');
    expect( evalPostFix( [ 0, 1, 2,'+'] ) ).toBeNull();
    expect( evalPostFix( [ 1, 2 ] ) ).toBeNull();
});

});


