const Point = require(`./Point.js`);
const Bfs = require(`./Bfs.js`);

class Area {
    /**
     * @constructor Initializes a new instance of the "Area" class
     * The width and the height respectively define the number of columns and rows. 
     * @param int _width of the area
     * @param int _height of the area
     */
    constructor(_width, _height) {
        this.width = parseInt(_width || 1);
        this.height = parseInt(_height || 1);
        this.tab = [new Point(0, 0)];
        this.tabSize = this.width * this.height;
        this.freeCellsTable = this.freeCellsCalcul();
    }

    /**
     * Add a "Point" in the area
     * The "Point" can be outside of the gameArea
     * @param Point _point 
     * @returns Boolean true/false 
     */
    addPoint(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.tab.length >= this.tabSize)
            return (false);
        if (!this.isFreeCell(_point)) {
            _point.copy(this.freeCellsTable[0]);
            this.tab.push(_point);
        }

        this.tabSize++;
        this.updateFreeCellsTable(_point);
        return true;
    }

    /**
     * This function checks if the Point given as parameter is free on this.tab
     * If cell is free, return true, else return false
     * @param Point _point
     * @returns boolean true/false
     */
    isFreeCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((this.tab.find(test => test.x === _point.x && test.y === _point.y)) !== undefined)
            return (false);
        return (true);
    }

    /**
     * This function searchs free cells in the game area and sorts it in a table.
     * The sort is made by an data structure algorithm Breadth-first search.
     * @returns a table of free cells in the game area
     */
    freeCellsCalcul() {
        let freeCells = [];
        let x = 0;
        let y = 0;
        let bfs = new Bfs(this.width, this.height);
        let node;
        bfs.insertInQueue(new Point(x, y));
        bfs.visited[y][x] = (true);
        while (bfs.queue.length > 0) {
            node = bfs.removeFromQueue();
            if (this.isFreeCell(node))
                freeCells.push(node);
            if (node.x + 1 < this.width && node.y + 1 < this.height) {
                if (!bfs.visited[node.y][node.x + 1]) {
                    bfs.insertInQueue(new Point(node.x + 1, node.y));
                    bfs.visited[node.y][node.x + 1] = (true);
                }
                if (!bfs.visited[node.y + 1][node.x]) {
                    bfs.insertInQueue(new Point(node.x, node.y + 1));
                    bfs.visited[node.y + 1][node.x] = (true);
                }
            }
        }
        let node2 = node.duplicate();
        node2.x++;
        if (this.isFreeCell(node2))
            freeCells.push(node2);
        return (freeCells);
    }

    /**
     * This function updates the freeCellsTable by removing the Point given as an argument
     * @param Point _point
     * @returns Boolean true/false 
     */
    updateFreeCellsTable(_point) {
        if (!(_point instanceof Point))
            return (false);
        let index = this.freeCellsTable.findIndex(test => test.x === _point.x && test.y === _point.y);
        this.freeCellsTable.splice(index, 1);
        return (true);
    }

    /**
     * Moves an existing point in the area to new given coordinates
     * The new coordinates may be outside the limits
     * @returns Boolean true/false
     */
    movePoint(_point) {

    }


    /**
     * Check the position of each existing "Point" in the area
     * Each Point outside the limits is automatically moved within the limits to the nearest free position
     * @returns int : Number of points moved
     */
    needAllInside(/* déterminer les paramètres */) {
        // implémenter la méthode
    }
}

let area = new Area(3, 4);
let point1 = new Point(0, 0);
area.addPoint(point1);
console.log(area);
