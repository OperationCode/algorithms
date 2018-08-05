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
