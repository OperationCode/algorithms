# Queue

## Description

A queue is a data structure that can store or retrieve one item at a time, in first-in-first-out (FIFO) order. Think of FIFO as standing in the line at the grocery store. You would expect the first person that stood in the line to be the first one served by the cashier.

Queue implements FIFO through two operations; `enqueue` and `dequeue`, which can be visualized in the diagram below:

![Queing operations](../../../assets/queue.png)

- `enqueue` operation stores the item at the back of the queue.
- `dequeue` operation retrieves the item from the front of the queue.

(_In the diagram above, the right side is the front, and the left is the back. However, the same operations are applied even when the direction is reversed_)

## Implementation

In this exercise, implement the following functions for the `Queue` class

- `isEmpty()`
  - Write a method that returns `true` if the queue is currently empty.
- `peek()`
  - Write a method that returns the element at the front of the queue.
- `enqueue(el)`
  - Write a method that stores an element(`el`) into the queue.
- `dequeue()`
  - Write a method that retrieves an element from the queue.
- `toString()`
  - The stringify method is provided for you. `toString()` is a useful method to implement into data structures for easier debugging.
  - For example, you could use it for logging:
    ```
    const queue = new Queue();
    constole.log(queue.toString());
    ```
  - A queue is simple enough to be logged without actually needing `toString()`, but with more complex data structures, this is an invaluable method.

## Queue Exercises

**Stack Queue**

(Solve this exercise after finishing the stack exercise).

Implement a queue using stacks.  Instead of using an array as your store, use a stack:
```
const Stack = require('../stack/Stack');

export default class Stack {
  constructor() {
    this.store = new Stack();
  }

  isEmpty() {}

  peek() {}

  push(value) {}

  pop() {}

  toString() {
    return this.store.toString();
  }
}
```
