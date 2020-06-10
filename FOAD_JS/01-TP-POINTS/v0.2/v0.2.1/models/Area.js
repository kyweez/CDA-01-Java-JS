const Point = require(`./Point.js`);

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
            _point.copy(this.freeCellsTable[0]);
        this.tab.push(_point);
        this.tabSize++;
        this.updateFreeCellsTable(_point);
        return true;
    }

    isFreeCell(_point) {
        if (!(_point instanceof Point))
            return (false);
        if ((this.tab.find(test => test.x === _point.x && test.y === _point.y)) !== undefined)
            return (false);
        return (true);
    }

    freeCellsCalcul() {
        let freeCells = [];
        let x;
        let y;
        let maxFreeCells = this.tabSize - this.tab.length;
        for (y = 0; y < this.height; y++) {
            for (x = 0; x < this.width; x++) {
                if (this.isFreeCell(new Point(x, y))) {
                    freeCells.push(new Point(x, y));
                    maxFreeCells--;
                    if (maxFreeCells === 0)
                        return (freeCells);
                }
            }
        }
        return (freeCells);
    }

    updateFreeCellsTable(_point) {
        if (!(_point instanceof Point))
            return (false);
        let index = this.freeCellsTable.findIndex(test => test.x === _point.x && test.y === _point.y);
        this.freeCellsTable.splice(index, 1);
        return (true);
    }

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

let area = new Area(3, 3);
console.log(area);
let point1 = new Point(1, 1);
area.addPoint(point1);
console.log(area);

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

