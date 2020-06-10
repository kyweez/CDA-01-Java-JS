# Breadth-first search

Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. 
It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

It uses the opposite strategy as depth-first search, which instead explores the node branch as far as possible before being forced to backtrack and expand other nodes.

[My image](https://github.com/kyweez/CDA-01-Java-JS/blob/master/FOAD_JS/01-TP-POINTS/v0.2/v0.2.1/docs/BFS.png)

## Approach : Use Queue
**As we know queue is used for BFS.**
* Initialize queue.
* Initialize 2d boolean array, the same size as the original array. This will help us in avoiding traversal to go in loops.
* Add the first element position (element at (0,0), row=0, column=0) to queue
  * Now until the queue is not empty
  * Take out the position from the queue. Check if indexes are within the range of given matrix and marked false in the visited[] array, if not then ignore it and get the next position from the queue. If indexes are valid and not visited, apply the function.
  * Mark the element in the visited array.
* Add the element positions from left, right, down and up from the current element into the queue.

# Queue
A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
Unlike a stack, which works based on the last-in, first-out (LIFO) principle, a queue works based on the first-in, first-out (FIFO) principle.
A queue has two main operations involving inserting a new element and removing an existing element.
The insertion operation is called enqueue, and the removal operation is called dequeue. The enqueue operation inserts an element at the end of the queue, whereas the dequeue operation removes an element from the front of a queue.
