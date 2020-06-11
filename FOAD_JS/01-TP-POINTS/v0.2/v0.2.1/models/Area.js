const Point = require(`./Point.js`);
const Bfs = require(`./Bfs.js`);

class Area {
    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Area"
     * La largeur et la hauteur définissent respectivement le nombre de colonnes et de lignes. 
     * @param int _width largeur de la zone
     * @param int _height hauteur de la zone
     */
    constructor(_width, _height) {
        this.width = parseInt(_width || 1);
        this.height = parseInt(_height || 1);
        this.tab = [new Point(0, 0)];
        this.tabSize = this.width * this.height;
        this.freeCellsTable = this.freeCellsCalcul();
    }

    /**
     * Ajoute un "Point" dans la zone
     * Le "Point" peut se trouver hors des limites de la zone
     * @param Point _point 
     * @returns Boolean true en cas de succès, false si l'ajout est impossible 
     */
    addPoint(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (this.tab.length >= this.tabSize)
            return (false);
        if (!this.isFreeCell(_point))
            // _point.copy(this.freeCellsTable[0]);
            this.tab.push(_point);
        this.tabSize++;
        // this.updateFreeCellsTable(_point);
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
    
    // updateFreeCellsTable(_point) {
    //     if (!(_point instanceof Point))
    //         return (false);
    //     let index = this.freeCellsTable.findIndex(test => test.x === _point.x && test.y === _point.y);
    //     this.freeCellsTable.splice(index, 1);
    //     return (true);
    // }

    /**
     * Déplace un point existant dans la zone vers de nouvelles coordonnées
     * Les nouvelles coordonnées peuvent se trouver hors limites
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    movePoint() {
        // implémenter la méthode
    }


    /**
     * Vérifie la position de chaque "Point" existant dans la zone
     * Chaque Point hors des limites est automatiquement déplacé dans les limites vers la position libre la plus proche
     * @returns int le nombre de points déplacés
     */
    needAllInside(/* déterminer les paramètres */) {
        // implémenter la méthode
    }
}

let area = new Area(300, 400);
console.log(area.freeCellsTable);

// let point2 = new Point(1, 0);
// let point3 = new Point(0, 2);
// let point4 = new Point(0, 1);
// let point5 = new Point(2, 2);
// let point6 = new Point(-1, 1);
// area.tab.push(point1);
// area.tab.push(point2);
// area.tab.push(point3);
// area.tab.push(point4);
// area.tab.push(point5);
// area.tab.push(point6);
// console.log(area.tab);

