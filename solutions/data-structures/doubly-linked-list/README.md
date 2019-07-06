# Doubly Linked List

## Description

Unlike a singly-linked list, a doubly-linked list node keeps a reference to the previous node in addition to the next node. This allows traversal in both directions of the list, towards the head and the tail.

![Linked List](../../../assets/doubly-linked-list.png)

The operations for the doubly linked list is the same a singly linked list.

## Implementation

In this exercise, implement the following functions for the `DoublyLinkedListNode` and `DoublyLinkedList` classes:

- `DoublyLinkedListNode`
  - `constructor()`
    - Write a method that instantiates the node.
    - The node takes `value`, `previous` and `next`.
- `LinkedList`
  - `constructor()`
    - Write a method that instantiates the list.
    - The instance variables `head` and `tail` should be set to `null`.
  - `prepend(value)`
    - Write a method that inserts the `value` at the beginning of the linked list.
  - `append(value)`
    - Write a method that inserts the `value` at the end of the linked list.
  - `find(value)`
    - Write a method that returns the `node` that contains the `value`.
  - `deleteHead()`
    - Write a method that deletes the first element in the linked list.
  - `deleteTail()`
    - Write a method that deletes the last element in the linked list.
  - `delete(value)`
    - Write a method that deletes the `value` in the linked list.

The most important operations are `prepend/append` for adding data, `delete` for removing data, and `find` for retrieving data.

## Detailed Walkthrough

To start, build `DoublyLinkedListNode`. A doubly linked list node keeps a reference to the previous node in addition to the next node. Then, build the constructor the same way as the singly linked list.

> Jest Tip: If you need to filter by the exercise name, press `p`.
> After pressing `p`, enter the string "Doubly" to filter by doubly linked list tests.

### `prepend()`

- The `prepend` method inserts the item at the beginning of the list.
- Operations:
  - Create a new `Node`.
  - Set the current head's previous reference to the new node.
  - Set the new node's next to the current `head`.
  - Update `head` to point at the new node.
- Take into consideration where this is the first value in the linked list.

### `append()`

- The `append` method inserts the item at the end of the list.
- Operations:
  - Create a new `Node`.
  - Set the current tail's `next` to be the new node.
  - Set the new node's previous to the current `tail`.
  - Update `tail` to point at the new node.
- Take into consideration where this is the first value in the linked list.

### `find(value)`

- The `find` method returns the node with the target value.
- Traverse the array in the same way as a singly linked list.

### `deleteHead()` / `deleteTail()`

- The `deleteHead/Tail` methods are useful utilities methods.
- Take into consideration where there is only one node in the linked list.

### `delete(value)`

- The `delete` method removes the first node with the specified value.
- The delete operation for a doubly linked list is significantly simpler due to having a reference to the previous node.
- Utilize `find` and `deleteHead/Tail` methods written above to write the method.


#Problems

**Create a list from an Array**

Given an array, create a list with the same elements in the same order. 



```const arrayToList = arr => { 

}
```


**Find the Smallest Value in a List**

Given a list of numbers, find the smallest value.  This just requires traversing the list, keeping track of the smallest number seen for far.  You can start at either end, but most people will start at the head.  Finding the smallest element is the basis for selection sort, which is about twice as slow as insertion sort, which is mentioned below.  The basic idea of finding the smallest element can be greatly improved by using a heap, another data structure.



```const smallestValue = dll => { 

}

console.log( smallestValue( [13, 7, 6, 12 ].arrayToList() ) ) ==  6 );

```




**Reverse a doubly linked list**

Sadly, just switching head and tail will not reverse a list, as the next and previous pointers will still be messed up.  To revere a list it is necessary to go through each element and to swap the next and previous values in the right way.  We can either create a new doubly linked list that is the reverse of this one, or we can modify the existing list.  Try to do both.


```const reverseDLL = dll => { 

}

console.log( reverseDLL( [13, 7, 6, 12 ].arrayToList() ) ) ==  [12, 6, 7, 13 ].arrayToList()  );
console.log( reverseInPlace( [13, 7, 6, 12 ].arrayToList() ) ) ==  [12, 6, 7, 13 ].arrayToList()  );


```


**Merge two sorted  Doubly Linked Lists**

Given two sorted lists, merge the two lists to make a larger sorted list.  Your function should take a comparator, a function that compares two elements.  This function, mergring two sorted lists, is the basis for merge sort, one of the very first sorting algorithms. 

```const merge  = ( dll1, dll2, comp)  => { 

}

console.log( merge( [7, 13].arrayToList(),   merge( [ 6, 12 ].arrayToList(),  (a,b) => { return a < b;}   ) )) ==  [6, 7, 12, 13 ].arrayToList()  );

```


**Insert a Value in a Sorted List**

Gien a list and an element, insert the element in sorted order.   This function is the basis for insertion sort, the best sorting agorithm for very small arrays.  


```const insert  = ( dll, el, comp)  => { 

}

console.log( merge( [7, 13].arrayToList(),  6,  (a,b) => { return a.value < b.value;}   ) )) ==  [6, 7, 13 ].arrayToList()  );

```



**Priority Queue using DLL**

A priority queue is a data structure that acts like a queue where you can 'enqueue' and 'dequeue' elements, but instead of returning the earliest element still in the queue, it returns the element with the highest priority.  It is normal to have a comparison function, called a comparator, to tell whether one item has  higher priority than another.  If two elements have the same priority, you should return the earlier element.  You should implement 'enqueue', `getHighest`, `peek`, and  `isEmpty`.

The implementation is a mixture of the ideas of a queue, and inserting a value in a sorted list.   This pattern of problems being solved with combinations of previous solutions is very common.  


