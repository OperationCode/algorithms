import Stack from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeUndefined();
    expect(stack.store).not.toBeUndefined();
  });

  it('should stack data to stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('1,2');
  });

  it('should peek data from stack', () => {
    const stack = new Stack();

    expect(stack.peek()).not.toBeUndefined();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).not.toBeUndefined();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should be possible to push/pop', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('1,2');
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});
