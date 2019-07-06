import { stockSpan } from '../StockSpan'


describe('StockSpan', () => {
  it('should should compute spans', () => {

        expect( stockSpan( [100, 80, 60, 70, 60, 75, 85] ).toString()).toBe(  [1, 1, 1, 2, 1, 4, 6].toString() );

});

});

   
