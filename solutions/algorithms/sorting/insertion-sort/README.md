# Insertion Sort

Insertion sort is a simple sorting algorithm that builds 
the final sorted array (or list) one item at a time. 
It is much less efficient on large lists than more 
advanced algorithms such as quicksort, heapsort, or merge 
sort.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)


Insertion sort can be implemented by looping through the input, and inserting the next element in the now sorted list of previous elements.  Tghis can be done in two ways, wither by creating a new list or array of elements, or by sorting in place.  If sorting is done in place, any items may need to be moved around.

Selection sort can be implemented as repeatedly calling insert in place on a linked list, as we previously implemented in the section of doubly linked lists.



## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |


## Comparison with Selection Sort

Selection sort and Insertion sort are similar, but have a few important differences.  Both insert items into a sorted list.  Selction sort looks at the entire list to be sorted each time and chooses the next smallest, and so alwayd appends an element to its currently sorted list of elements.  Insertion sort, rather than find the next smallest elements, just inserts whatever element is next and finds the right position for it.  Selection sort does all its work in finding what element to insert next, while Insertion sort does all its work on finding where t insert the element. 

Each method has times when it is applicable.  Selection sort only write to memory n times, as it always appends to its sorted list.  This makes it suitable for places where writes are expenseive, like flash memory.  Insertion sort is very fast for small lists, less than 16 elements, and is the sorting routine of choice for lists of this size.  The threshold can vary from between 7 and 50 items in different environments.  Insertion sort  does move a large amount of data around, however, so if items are large, it is better to sort indices, rather than the data items, and move the data into place in a final pass.  

## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
