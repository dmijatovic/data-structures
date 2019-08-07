# Data strcutures

This repo is based on [Udemy training about the data structures](https://www.udemy.com/js-algorithms-and-data-structures-masterclass)

## Singly Linked Lists

Each node has reference to next node, start and end.

Pro: optimized for inserting at the start or end of list and deleting first item in the list.

Con: Random access to node is not allowed/defined. Cannot access node by index (does not have index). The custom function we need to create for this has O(n) complexity and is heavier than standard array implementation.

Linked list are basic idea for other data strutures handled in this training like Stacks and Queues.

The implementation is in classes/SinglyLinkedLists.js

## Doubly Linked List

List where node has pointer to previous and next node. It takes more memory than singly linked list. Skipped for now

## Stack

Stack use LIFO approach: the last element added to the stack will be the first element removed from the stack.

Stacks are used for:

- managing function invocations
- undo/redo features

## Queue

Queue uses FIFO approach: the first element added is the first element to be removed from queue.

## Binary Search Tree

Tree is data structure that consist of nodes in parent/child structure. Top most node is called root. The tree has only one root (one top node).

- root: top most node
- child: node directly connected to another node above itself (parent)
- parent: the node that has one or more children nodes
- siblings: nodes with the same parent
- leaf: a node without children (last node in tree)
- edge: connection between two nodes

Usecases:

- HTML DOM
- Network routing
- Decission trees
- Folders in OS

Binary Tree CAN HAVE MAX. two children. Binary Search Tree is sorted in specific order. Every node to the left is lower than the parent node and on the right the number is larger than the parent node.

### Traversing a tree structure

Different ways can be used. In general depth (DFS) and breath first search (BFS) approaches can be used. BreathFirstSearch (BFS) stores order in the local queue. Wide trees could be more eficiently accessed using DFS.

## Binary Heap

Is a tree structure. Each node has 2 children (binary tree). Different types addressed in this project are:

- MaxBinaryHeap: parent node is always larger than child node. There is no order between syblings. Left children are filled in first.
- MinBinaryHeap: parent node is always smaller than the child nodes.

Heaps are used for priority queues and graph traversal algorithms.

Heap can be stored in an array. The formula for locating children at array position for MaxBinaryHeap for parent n, left child is 2n+1 position, right child is at 2n+2 position. For locating parent from the child position the formula can be reversed Math.floor((childPos-1)/2)

### Priority queue

It implements binary heap for efficiency. Heap approach has complexity big O notation of log n (O (log n)) while basic array has O (n).

## Hash table (key-value data store)

Hash table are used to store key-value pairs. The keys are not ordered. They are fast for finding/removing items.

JS has built in Object and Maps hash tables.

### Hashing function

In this training we implement our own version of key-value pair hash table. Our simple implementation of hash function will return number when we input string. It will always return same number for same input string.

Proper hash function:

- is fast:
- spreads/distributes data properly over table
- is deterministic, it returns always same output with same input

## Undirectional and directional graph data structure

Graph is a sort of tree that has multiple links between the nodes. The links can be unidirectional or multi-directional/

### Traversing graph

- Depth first (DFS): followin the 'depth' of links from first node always take one node and go deeper.

- Breath first (BFS): following first all links from one node before proceeding to next node.
