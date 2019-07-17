# Primality Test

A **prime number** (or a **prime**) is a natural number greater than `1` that 
cannot be formed by multiplying two smaller natural numbers. A natural number 
greater than `1` that is not prime is called a composite number. For 
example, `5` is prime because the only ways of writing it as a 
product, `1 × 5` or `5 × 1`, involve `5` itself. However, `6` is 
composite because it is the product of two numbers `(2 × 3)` that are 
both smaller than `6`. 

![Prime Numbers](https://upload.wikimedia.org/wikipedia/commons/f/f0/Primes-vs-composites.svg)

A **primality test** is an algorithm for determining whether an input 
number is prime. Among other fields of mathematics, it is used 
for cryptography. Unlike integer factorization, primality tests 
do not generally give prime factors, only stating whether the 
input number is prime or not. Factorization is thought to be 
a computationally difficult problem, whereas primality testing 
is comparatively easy (its running time is polynomial in the 
size of the input). 




## Implementation


##Trial Division

[Trial Division](https://en.wikipedia.org/wiki/Trial_division) is the oldest primarlity algortihm.  It works by successively dividing the number, n,  by larger and larger numbers until a divisor is found.  If no divisor is found by the time you reach the square or n, then n is prime.  

Write `function trialDivision(number)`.

##Fermat's Method

Every number odd number n can be written as the difference of two squares, so there are a and b, such that n = a^2 - b^2.   If n  = c*d, n can be written as ((c+d)/2)^2 * ((c-d)/2)^2.    This can be checked by simple algebra. The idea of Fermat's method is to guess a value for a, and try to work out what b is.  The usual starting place is the first number larger than the square root of n.  If we check all numbers up to to (n+1)/2 without finding a divisor, the number is prime.

Write `fermatTest(n)`.



This function returns false if the nunber is prime, otherwise it returns a divisor.  This method is slower than Trial Division, but a combination of both methods is faster.  This method can be extended in various ways to make better algorithms, like the quadratic sieve, which are too complicated for us.


#Primality Tests 

There are algorithms that test whether a nunber if prime with high probablility, but which are sometimes wrong.  These are much faster than Trial Division.  These are what is used to find the large prime numbers that are used in cryptography.

## Fermat's Primality Test

Fermat's little theorem tells us that  if p is prime and a is not divisible by p, then a^{p-1} mod p  = 1.  To check a number is prime we can choose an a, and check whether a^{p-1} mod p is equal to 1.  If this is true for several different numbers, we can be fairly confident that p is prime.

Write `fermatPrimality(n)`.




 

## References

- [Prime Numbers on Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
- [Primality Test on Wikipedia](https://en.wikipedia.org/wiki/Primality_test)
