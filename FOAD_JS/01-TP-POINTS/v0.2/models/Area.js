const Point = require(`./Point.js`);
const SYMBOL = `  `;

class Area {

    /**
     * @constructor Initialize a new instance of the "Area" class
     * The width and the height respectively define the number of columns and rows.
     * @param int _width
     * @param int _height
     */
    constructor(_width, _height) {
        this.gameAreaWidth = parseInt(_width);
        this.gameAreaHeight = parseInt(_height);
        this.totalAreaWidth = parseInt(_width);
        this.totalAreaHeight = parseInt(_height);
        this.totalArea = (() => {
            let i;
            let j;
            let tab1D;
            let tab2D = [];
            for (i = 0; i < this.totalAreaHeight; i++) {
                tab2D.push((() => {
                    j = 0;
                    tab1D = [];
                    for (j; j < this.totalAreaWidth; j++) {
                        tab1D.push(SYMBOL);
                    }
                    return (tab1D);
                })());
            }
            return (tab2D);
        })();
    }

    /**
     * This function returns the new tab[][] with "y" more ordinates 
     * @param Object[] tab2D 
     * @param int y
     * @returns tab2D
     */
    pushOrdinate(tab2D, y) {
        let abscissaLength = tab2D[0].length;
        for (let i = 0; i < y; i++) {
            let tab1D = [];
            tab2D.push((() => {
                for (let j = 0; j < abscissaLength; j++)
                    tab1D.push(SYMBOL);
                return (tab1D);
            })());
        }
        return (tab2D);
    }

    /**
     * This function returns the new tab[][] with "x" more abscissas 
     * @param Object[] tab2D 
     * @param int x
     * @returns tab2D
     */
    pushAbscissa(tab2D, x) {
        let ordinateLength = tab2D.reduce((count, row) => (count + row.length / row.length), 0);
        for (let i = 0; i < ordinateLength; i++) {
            for (let j = 0; j < x; j++)
                tab2D[i].push(SYMBOL);
        }
        return (tab2D);
    }

    /**
     * This function add a Point in the area
     * The point can be outside of the game area. If so, the totalArea is increased.
     * If the point already exists, returns false.
     * If the point can be set, put the point into the corresponding cell.
     * @param Point _point 
     * @returns Boolean true en cas de succès, false si l'ajout est impossible 
     */
    addPoint(_point) {
        if (!(_point instanceof Point))
            return (false);
        if (_point.x < this.totalAreaWidth && _point.y < this.totalAreaHeight) {
            if (this.totalArea[_point.y][_point.x] instanceof Point)
                return (false);
            this.totalArea[_point.y][_point.x] = _point;
            return (true);
        }
        else {
            if (_point.x >= this.totalAreaWidth) {
                let diff = _point.x - this.totalAreaWidth + 1;
                this.totalArea = this.pushAbscissa(this.totalArea, diff);
                this.totalAreaWidth = _point.x + 1;
            }
            if (_point.y >= this.totalAreaHeight) {
                let diff = _point.y - this.totalAreaHeight + 1;
                this.totalArea = this.pushOrdinate(this.totalArea, diff);
                this.totalAreaHeight = _point.y + 1;
            }
        }
        this.totalArea[_point.y][_point.x] = _point;
        return (true);
    }

    /**
     * This function returns the full grid. There is 2 areas, the game area included in the total area.
     * Point outside the game area are colored red
     * @returns string of the grid.
     */
    getGrid() {
        // On ne peut pas utiliser le for of ici. Car on doit gerer l'aire de jeu a l'interieur de l'aire totale.
        let x;
        let y;
        let gridString = "";

        for (y = 0; y < this.totalAreaHeight; y++) {
            for (x = 0; x < this.totalAreaWidth; x++) {
                if (x < this.gameAreaWidth && y < this.gameAreaHeight) {
                    if (this.totalArea[y][x] instanceof Point)
                        gridString += `\x1b[47m\x1b[30m${SYMBOL}\x1b[0m`
                    else
                        gridString += `\x1b[44m${this.totalArea[y][x]}\x1b[0m`
                }
                else {
                    if (this.totalArea[y][x] instanceof Point)
                        gridString += `\x1b[41m\x1b[30m${SYMBOL}\x1b[0m`
                    else
                        gridString += `\x1b[46m${this.totalArea[y][x]}\x1b[0m`
                }
            }
            gridString += `\n`;
        }
        return (gridString);
    }
}

let area = new Area(5, 5);
area.addPoint(new Point(4, 4));
area.addPoint(new Point(4, 4));
area.addPoint(new Point(5, 5));
area.addPoint(new Point(5, 5));
area.addPoint(new Point(6, 6));
area.addPoint(new Point(7, 7));
console.log(area.getGrid());