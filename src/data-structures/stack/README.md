# Stack

## Description

A stack is a data structure that can store and retrieve one item at a time, in last-in-first-out (LIFO) order.  Imagine stacking plates on top of each other or grabbing them from the top one at a time.  When you want a plate, you grab one from the top, and when you are done using it, you put it back on the top.

Stack implements LIFO through two operations: `push` and `pop`, which can be visualized in the diagram below:

![Queing operations](../../../assets/stack.png)
(_A stack is usually visualized from bottom-to-top_)

- `push` operation stores the item at the top of the stack.
- `pop` operation retrieves the item from the top of the stack.

## Implementation

In this exercise, implement the following functions for the `Stack` class

- `isEmpty()`
  - Write a method that returns `true` if the stack is currently empty.
- `peek()`
  - Write a method that returns the element from the top of the stack.
- `push(el)`
  - Write a method that stores an element(`el`) into the stack.
- `pop()`
  - Write a method that retrieves an element from the stack.
- `toString()`
  - The stringify method has been provided for you.

## Stack Exercises

**Bracket Matching**

Write an algorithm to determine if all of the delimiters in an expression are matched and closed.

- Delimiters are `(` `{` `[`
  - Closed is `()` and `(()` would not be closed
  - Matched is `{}`, and `{]` would not be matched.

```
const bracketMatch = string => {

}

console.log(bracketMatch('{ac[bb]}') === true);
console.log(bracketMatch('[dklf(df(kl))d]{}') === true);
console.log(bracketMatch('{[[[]]]}') === true);
console.log(bracketMatch('{3234[fd') === false);
console.log(bracketMatch('{df][d}') === false);
console.log(bracketMatch('([)]') === false);
```

