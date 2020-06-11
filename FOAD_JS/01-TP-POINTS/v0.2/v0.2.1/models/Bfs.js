/**
* Check the docs on : https://github.com/kyweez/CDA-01-Java-JS/blob/master/FOAD_JS/01-TP-POINTS/v0.2/v0.2.1/docs/BFS.md
* 
* @class Bfs
*/
class Bfs {
    #width;
    #height;
    /**
     * The Queue constructor uses an array to store its elements.
     */
    constructor(_width, _height) {

        this.#width = parseInt(_width || 0);
        this.#height = parseInt(_height || 0);

        /** Creating a queue **/
        this.queue = [];

        /** Creating a 2D boolean array (cells are initialized to false **/
        this.visited = (() => {
            let i, j, tab1D;
            let tab2D = [];
            for (i = 0; i < this.#height; i++) {
                tab2D.push((() => {
                    j = 0;
                    tab1D = [];
                    for (j; j < this.#width; j++)
                        tab1D.push(false);
                    return (tab1D);
                })());
            }
            return (tab2D);
        })();
    }

    /**
     * This method adds an element at the end of the queue. 
     * We use the push method of the array object to insert the new element at the end of the queue.
     * @param {*} _element 
     */
    insertInQueue(_element) {
        this.queue.push(_element);
    }

    /**
     * This method removes an element from the front of the queue. 
     * We use the shift method of the array to remove an element at the front of the queue.
     */
    removeFromQueue() {
        return (this.queue.shift());
    }
}

module.exports = Bfs;