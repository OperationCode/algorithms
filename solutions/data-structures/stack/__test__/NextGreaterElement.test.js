import { nextGreaterElement } from '../NextGreaterElement'


describe('NextGreaterElement', () => {
  it('should should compute NGE', () => {

        expect( nextGreaterElement( [ 11,13,21,3] ).toString()).toBe(  [13,21,null,null].toString() );

});

});

