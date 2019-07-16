# Happy Number 

A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)



For example, 19 is happy, as the associated sequence is
```
12 + 92 = 82,
82 + 22 = 68,
62 + 82 = 100,
12 + 02 + 02 = 1.
```

Check if a number is happy.  One way uses a hash table.  Try to solve the problem with only using constant space.  Floyd's trick for finding loops can help.



## References

[Wikipedia](https://en.wikipedia.org/wiki/Happy_number)
