# Binary Tree


## Description

Just as a list is a data structure with nodes, where each node has one child, the next node, a binart tree is a data structure made up of nodex where each node has two children, a left child and a right child.  The first node is called the root, and in Computer Science, trees are drawn downwards, for some reason.

![Binary Tree](../../../assets/Binary_tree.svg)

As well as a left and right child, binary tree nodes usually have a value. In the aboe picture, the number displayed is the value of the node.  Sometimes nodes have a parent pointer, and sometimes they even have a pointer to their siblings or uncles. 

We say a node's height is one greater than the max height of its children.  A node without children has height one.  A node without children is called a leaf. A node with children is called an interior node.  Sometimes nodes will kepp track of their height.  The depth of a node is how far it is from the root.  The root has depth 1, its children have depth 2, etc.

 Serveral kinds of binary tree are distinguised.  A degenerate binary tree is one that have only one or zero children at each node.  This means it is similar to a list.
 A full binary tree has 0 or 2 nodes at every level.  A complete binary tree has two nodes at every level, save the lowest level.  At the lowest level, all nodes are as far left as possible.  This becomes important later when we discuss heaps.  

 A perfect binary tree of height h, has all interior nodes with two children, and all leaves are at depth n. A balanced binary tree is one where the left and right subtrees of every node differ in height by no more than 1.  



## Implementation

The usual minimal implementation of a binary tree node has a constructor that sets its value, left and right.   Helper functions can copute the `height` of a node recursively.  The `numberOfLeaves` and `numberOfNodes` are also easily computed recursively. 

Test functions that determines where a binary node is `balanced`, `degenerate`, `perfect` or `complete` can be written.

A binary tree is a data structre that stores the root binary tree node.  

## Binary Tree Problems

A binary tree can be traversed in several ways.  In order traversal visits the left tree, then the right tree, and then visits the root.  Pre-order visits the root, then the left and then the right subtree.  Post-order visits the left subtree, then the right sibtree, then the root. 

Write a method that takes a callback, and calls it on each node in pre-order, in-order, and post-order.

These methods are most easily written recursively.  It is worthwhile to write these iteratively using a stack.   Write

`inOrderIterative(tree,callback)`

 `preOrderIterative(tree,callback)`

`postOrderIterative(tree,callback)`







