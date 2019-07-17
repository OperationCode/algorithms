import fibonacci from '../fibonacci';

import fibonacciR from '../fibonacciR';

import fibonacciM from '../fibonacciM';


describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
  });

 it('should calculate fibonacci correctly', () => {
    expect(fibonacciR(1)).toEqual(1);
    expect(fibonacciR(2)).toEqual(1);
    expect(fibonacciR(3)).toEqual(2);
    expect(fibonacciR(4)).toEqual(3);
    expect(fibonacciR(5)).toEqual(5);
    expect(fibonacciR(6)).toEqual(8);
    expect(fibonacciR(7)).toEqual(13);
    expect(fibonacciR(8)).toEqual(21);
  });



 it('should calculate fibonacci correctly', () => {
    expect(fibonacciM(1)).toEqual(1);
    expect(fibonacciM(2)).toEqual(1);
    expect(fibonacciM(3)).toEqual(2);
    expect(fibonacciM(4)).toEqual(3);
    expect(fibonacciM(5)).toEqual(5);
    expect(fibonacciM(6)).toEqual(8);
    expect(fibonacciM(7)).toEqual(13);
    expect(fibonacciM(8)).toEqual(21);
  });


 it('should calculate fibonacci correctly', () => {
    expect(fibonacciM(1)).toEqual(1);
    expect(fibonacciM(2)).toEqual(1);
    expect(fibonacciM(3)).toEqual(2);
    expect(fibonacciM(4)).toEqual(3);
    expect(fibonacciM(5)).toEqual(5);
    expect(fibonacciM(6)).toEqual(8);
    expect(fibonacciM(7)).toEqual(13);
    expect(fibonacciM(8)).toEqual(21);
  });


});
