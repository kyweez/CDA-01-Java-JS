const Point = require(`./Point.js`);

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
                        tab1D.push(`  `);
                    }
                    return (tab1D);
                })());
            }
            return (tab2D);
        })();
    }

    getGrid() {
        // On ne peut pas utiliser le for of ici. Car on doit gerer l'aire de jeu a l'interieur de l'aire totale.
        let x;
        let y;
        let gridString = "";

        for (y = 0; y< this.totalAreaHeight; y++){
            for(x=0; x < this.totalAreaWidth; x++){
                if (x < this.gameAreaWidth && y < this.gameAreaHeight){
                    if (this.totalArea[y][x] instanceof Point)
                        gridString += `\x1b[42m\x1b[30m  \x1b[0m`
                    else
                        gridString += `\x1b[44m${this.totalArea[y][x]}\x1b[0m`
                }
                else{
                    if (this.totalArea[y][x] instanceof Point)
                        gridString += `\x1b[41m\x1b[30m  \x1b[0m`
                    else
                        gridString += `\x1b[46m${this.totalArea[y][x]}\x1b[0m`
                }
            }
            gridString += `\n`;
        }
        return (gridString);
    }
}

let area = new Area(31, 31);
area.gameAreaHeight = 21;
area.gameAreaWidth = 21;
let j = 30;
for (let i = 0; i < 31; i++) {
    area.totalArea[i][i] = new Point(i, i);
    area.totalArea[i][j] = new Point(i, i);
    j--;
}
// area.totalAreaHeight = 35;
// area.totalAreaWidth = 38;
// area.totalArea[37][34] = new Point(37, 34);
console.log(area.getGrid());

// let area = new Area(2, 4);
// for (let i = 0; i < 2; i++) {
//     area.totalArea[i][i] = new Point(i, i);
// }
// console.log(area.getGrid());