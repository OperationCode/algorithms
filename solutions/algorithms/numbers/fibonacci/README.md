# Fibonacci Number

In mathematics, the Fibonacci numbers are the numbers in the following 
integer sequence, called the Fibonacci sequence, and characterized by 
the fact that every number after the first two is the sum of the two 
preceding ones:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

A tiling with squares whose side lengths are successive Fibonacci numbers

![Fibonacci](https://upload.wikimedia.org/wikipedia/commons/d/db/34%2A21-FibonacciBlocks.png)

The Fibonacci spiral: an approximation of the golden spiral created by drawing circular arcs connecting the opposite corners of squares in the Fibonacci tiling;[4] this one uses squares of sizes 1, 1, 2, 3, 5, 8, 13 and 21.

![Fibonacci Spiral](https://upload.wikimedia.org/wikipedia/commons/2/2e/FibonacciSpiral.svg)


## Implemetation

The simple implementation of Fibinacci is recursive. Write 

Note how we need two base cases, as the recursive defintion calls `Fib(n-2)`.   This solution is very slow, as the call to `Fib(n-1)` redoes all the work of the call to `Fib(n-2)`.  In fact, a call to `Fib(n)`  makes an exponential numnber of recursive calls to itself, hence it is O(2^n), very slow.  However, there is a simple way to speed it up.  We can remember the intermediate results.  `mem` is an array that records the value of `Fib(n)` in position n.  If `mem[n]` is null, we do not know the value yet.


Write  a recursive `fibonacciMem(n,mem)` and write `fibonacciM(n)` using it.

This seems like a minor change, but this changes the complexity of the algorithm to linear.  This kind of change, adding memoization, is a very important skill that is expected in interviews.  All recursive solutions can have this applied, and if they repeatedly call the same arguments, this will result in a huge speed up.

We are not done yet.  We now can change this to an iterative solution.  Rather than go backwards from n, we can compute the Fibonacci numbers forwards, iteratively.  This is simpler. 

```
FibI(){

      var fib = [0,1];
      
      for (var i = 2; i <=n;i++)
      	  fib.push(fib[i-1]+fib[i-2];
      return fib[n];	 
}
```

Write `fibonacci` in this style so it returns the array of Fibonacci numbers.

This uses an array of length n.  We only ever look at the last two values of that array, so we can minimize the space we use by just storing them.

```
fibonacciNth((){
	var twoBack = 0;
      	var oneBack = 1;
      for (var i = 2; i <=n;i++){
      	  oneBack = oneBack+twoBack;
	  twoBack = oneBack;
	  }
      oneBack;	 
}
```


Write  `fibonacciNth` so it computes the nth Fibonacci number in this style.


This seems very efficient.  Can we do better? Of course, but for now, this will be fast enough.  

It is rare that someone is asked about a textbook problem in an interview.  It is common, however, to be asked a textbook problem with the words changed.  Consider the following interview question asked at Facebook:

"Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded."

The nunber 11 could either be the string "aa" or the string "k", so can be parsed in 2 ways.  The string "111" can be parsed as "aaa","ka", or "ak", so three ways.  "11111" can be parsed as k, followed by "111", or "a" followed by "1111", so can be parsed 5 ways.  In general, a string of n 1s can be parsed Fib(n) ways.  This problem is just the Fibonacci problem with some edge cases.  

Let `nwd(s,p)` be the number of ways of decoding a string starting from position p.  Write this recursively, with memoization, using an array and finally using just 2 variables.




This pattern, or writing a recursive program that does the problem
simply, followed by memoization, transforming the program to an
iterative one, and finally using constant space, is very common in
interviews.  If you are asked a question where you can do this, you
can easily fill an hour with intelligent code that improves each time.
This usually results in a good outcome.





## References

[Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)
