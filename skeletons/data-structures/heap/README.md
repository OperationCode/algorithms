# Heap

## Description

A binary heap is a data structure in the form of a binary tree.  Binary heaps are a common way of implementing priority queues, which we have earlier impleented using linked lists.  The binary heap was ,invented for a sorting algorithm, heapsort.[

A binary heap is defined as a binary tree with two  constraints:

The Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.  We tested this property in the section on binary trees.

The Heap property: the key stored in each node is either greater than or equal to (≥) or less than or equal to (≤) the keys in the node's children, according to some comparator.
Heaps where the parent key is greater than or equal to (≥) the child keys are called max-heaps; those where it is less than or equal to (≤) are called min-heaps.



## Implementation

Binary heaps are usually implemented using an array, rather than a binary tree.  This seems strange, as a heap is defined a kind of binary tree, but in practice, the array implementaiton is much faster.

A complete binary tree can be stored as an array, in the followiung way. The root is the element in position 0.  Its left child is in position1, and it right in position 2.  In general, the left child of a node in position i is at 2*i +1, and the right child is at 2*i+2.  The parent of a node can be found from the nodes position by subtracting one and dividing.

To make an empty head, we need it capacity, and the comparator that it will use. We set its size to be 0.  An empty head has size zero, and this is tested by `isEmpty`.

We can test if a heap data structure has the heap property, that is, if every node is smaller than its children, by checking that the nodes with children, those less than size/2, are smaller than their leaft and right children.  This is the `isHeap` function.

`extractMin` returns the top element, that is, the element in position 0.  It also removes this element, so needs to fix up the rest of the heap.  We do this by putting the last element in the heap in position 0, and calling  `heapify`.  `heapify` is a function that converts a data structure into a heap, so long as the only element out of position is the top element.

`heapify` check which of the top, left and right elements are smallest.  It puts the smallest one in the root position.  If this swaps the left or right node with the root, it calls `heapify` on the subtree that it has modified.  As the height of the  heap with n elements, is log(n), `heapify` only takes log(n) time.

`insertKey` add an element at the end of the array, and swaps that element with its parents until the element is larger than its parent.

`getMin`, the heap equivalent of `peek` returns the element in position 0.

Heaps were invented for Heapsort.  This algorithm takes an an array, and sorts it.  The simplest way to do this is to insert each element in a heap, and then extractMin untol the heap is empty.  This takes O(nlog(n)) time, as `insertKey` and `extractMin`  takes log(n) time.


## Heap Problems

**Priority Queue**

Earlier we inmplemented a Priority Queue using a lined list.  Now implement it using a heap. 

A priority queue is a data structure that acts like a queue where you can 'enqueue' and 'dequeue' elements, but instead of returning the earliest element still in the queue, it returns the element with the highest priority.  It is normal to have a comparison function, called a comparator, to tell whether one item has  higher priority than another.  If two elements have the same priority, you should return the earlier element.  You should implement 'enqueue', `getHighest`, `peek`, and  `isEmpty`. `enqueue` and `getHighest` should take at mpst O(log(n)) time, and the other operations should take O(1).


**makeHeap**


Rather than turn an array into a heap by calling insertMin n times, Floyd invented a way of turning an array in to a heap in linear time.  This works by calling heapify, starting with element size/2, and continuing down to element 0.  This calls heapigy size/2 times, so naively it seems to take O( n * log(n)).  However, due to math which is more complicated than we deal with here, this actually takes linear time. This is because almost all the work is done at the low levels, and `heapify` is cheaper the lower in a tree you are. 

Implement Floyd's makeHeap algorithm.

`makeHeap([5,4,3,2,1]).toString() = '1,2,3,4,5'`




**Merge k Sorted Arrays** 

Given k sorted arrays of size n each, merge them.

The fast way to do this is to push a triple, the array number, the index  and  value, to a heap.  We push one triple from each array.  We `extractMin` the smallest, comparing on just the value.  We insert the next element from the array whose triple was returned by `extractMin`.



**Median of a Stream**

Return the running median of a stream in an efficient way.  This can be done by keeping all the elements greater than the current median in a min heap, and all the elements less than the current median in a max heap.

