
/**
 * A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
 * Unlike a stack, which works based on the last-in, first-out (LIFO) principle, a queue works based on the first-in, first-out (FIFO) principle.
 * A queue has two main operations involving inserting a new element and removing an existing element.
 * The insertion operation is called enqueue, and the removal operation is called dequeue. The enqueue operation inserts an element at the end of the queue, whereas the dequeue operation removes an element from the front of a queue.
 * 
 * @class Queue
 */
class Queue {

    /**
     * The Queue constructor uses an array to store its elements.
     */
    constructor() {
        this.elements = [];
    }

    /**
     * This method adds an element at the end of the queue. 
     * We use the push method of the array object to insert the new element at the end of the queue.
     * @param {*} _element 
     */
    insertInQueue(_element) {
        this.elements.push(_element);
    }

    /**
     * This method removes an element from the front of the queue. 
     * We use the shift method of the array to remove an element at the front of the queue.
     */
    removeFromQueue() {
        this.elements.shift();
    }
}

module.exports = Queue;