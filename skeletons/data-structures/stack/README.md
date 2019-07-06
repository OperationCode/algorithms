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
  - Write a method that returns `true` if the stack is currently empty, and false otherwise.
- `peek()`
  - Write a method that returns the element from the top of the stack, and returns null if the stack is empty.
- `push(el)`
  - Write a method that stores an element(`el`) into the stack.
- `pop()`
  - Write a method that removes the top element from the stack and returns it, and returns null if the stack is empty..
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

**PostFix**

Write an algorithm to evaluate postfix.  

Postfix is a way of representing algebraic expressions without needing brackets, and it is faster to evaluate than regulat infix expressions.  Where we normally would write '1 + 2' in infix, or normal mathematical notation, in postfix we write '1 2 +'.  The operations =,*,-, and / take the previous two arguments.  The natural way of evaluating postifx is to push each number on a stack.  When you get to an operation, you pop the two numbers needed off the stack, and push the result back on.  When the expression is finished, there should be exactly one number on the stack. If we ever have too few arguments on the stack, or too mant arguments at the end, we return null; 

```const evalPostFix = arr => { 

}

console.log( evalPostFix( [ 1, 2,'+'] ) ) === 3);
console.log(  evalPostFix( [ 1, 2, 3,'+','+'] ) == 6);
console.log( evalPostFix( [ 0, 1, 2,'+'] ) == null );


```

**Stock Span Problem**

The stock span problem is a problem often posed in interviews,  where we have an array of n  price quotes for a stock and we want  to determine the span of stock’s price for all n days. 
The span, Si, of the stock on day, i, is how many you have to go back before the stock price was higher than now. This computes the largest interval when you would have made a profit from buying the stock, as its price is lower than now in all that span.

For example, if an array of 7 days prices is given as [100, 80, 60, 70, 60, 75, 85], then the span values for corresponding 7 days are [1, 1, 1, 2, 1, 4, 6]

Many interviewers like to ask questions about stock prices.  The simplest way to do this problem is to start from each price, and look backwards until you find a larger price.  If the prices happened to increase over the time period, each time you looked at a stock, you would need to look at all previous prices.  This algorithm thus can look at n^2/n prices, so the algorrithm is called O(n^2).  Using a stack, the problem can be solved in O(n), that is, using at most only a linear number of operations  c*n, where c is some constant.  

It is not immediately clear from the solution that the algorithm is linear, as there are nested loops.  How do we know that the algorithm is linear?  The outside loop goes through the array once, while the inside loop pops items off the stack.  We only push n items onto the stack, so we can at most pop n items off the stack.  This when we add up the amount of work all the inner loops do, the total is n pops or less.  The usual sign of an n^2 algorithm is nested loops, but in cases like this, where the inner loop pops a stack, or other data structure, we can prove that the inner loop only does a linear amount of work.  


```const stockSpan = arr => { 

}

console.log( stockSpan( [100, 80, 60, 70, 60, 75, 85] ) ) ==  [1, 1, 1, 2, 1, 4, 6] );

```

**Next Greater Element**


This problem is similar to the stock span problem, but looks forward rather than backwards.  A huge part of solving programming challenges is recognizing when you are being asked about a problem almost identical to a well known problem.  

Given an array of numbers, for each number, find the next greater element (NGE), that is, the next number that is bigger than the current number.  If no number is bigger, we set the answer to null.  For every array, the next greatest number of the last element is always null, as there are no numbers to the right.  For the array  [13, 7, 6, 12], the NGEs are [null, 12,12, null].  

Using a stack, in a similar way to the previous problem, we can solve this in linear time.  


```const nextGreatestElement = arr => { 

}

console.log( stockSpan( [13, 7, 6, 12 ] ) ) ==  [null, 12, 12, null] );

```


