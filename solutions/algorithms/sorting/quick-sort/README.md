# Quicksort

Quicksort is a divide and conquer algorithm.
Quicksort first divides a large array into two smaller 
sub-arrays: the low elements and the high elements.
Quicksort can then recursively sort the sub-arrays

The steps are:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with 
values less than the pivot come before the pivot, while all 
elements with values greater than the pivot come after it 
(equal values can go either way). After this partitioning, 
the pivot is in its final position. This is called the 
partition operation.
3. Recursively apply the above steps to the sub-array of 
elements with smaller values and separately to the 
sub-array of elements with greater values.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |           |


#InPlace QuickSort

Quicksort can be done in place, and this fact is one of the aspects that makes quicksort the preferred sorting algorithm in many contexts.  The standard way to do this is to keep track of a low index `lo` and a high index, `hi`, and to define a recursive function, `quicksort(lo,hi)` that sorts the part of the array between `lo` and `hi` (inclusive).    

One more step is needed, partitioning the array into two.  This is the critical step.  There are two ways to do this, the traditional Hoare way, and the simpler, but slower Lomuto way.  Once we have a function that partitions the array, and returns the index `p` where it is split, we  call `quicksort(lo,p)` and `quicksort(p+1, hi)`.

## Lomuto 

We are asked to partition the sub array from `lo` to `hi`.  We choose a `pivot`, the element at `hi`, and set our index `i` to `lo`.  We loop upwards with another index `j` from `lo` to `hi-1` and when  the element at `j` is less than the pivot, we swap the elements at `i` and `j`, and increment `i`.  Finally, we swap the element at `i` with the element at `hi`.  

## Hoare

Hoare's method is a little more complicated, but about three times faster, and it is Hoare's implementation that makes quicksort fatser than other O(nlog(n)) methods.   It changes how we partition the array as follows.  We choose a pivot as before, but now we choose the `pivot` to be the value of the middle element in the subarray.  We then move the two end points `lo` and `hi` towards each other until they cross.  If the element at `lo` is less than the pivot we repeatedly increase `lo`.   If the element at `hi` is greater than the pivot we repeatedlt decrease `hi`.   If `lo` and `hi` cross we are done, otherwise we swap the elements at `lo` and `hi` increment and decrement, and continue. 

Lomuto's method is inferior to Hoare's scheme because it does three times more swaps on average and degrades to O(n^2) runtime when all elements are equal.  
^
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
