const Point = require(`./Point.js`);

class Area {

    /**
     * @constructor Initialize a new instance of the "Area" class
     * The width and the height respectively define the number of columns and rows.
     * @param int _width
     * @param int _height
     */
    constructor(_width, _height) {
        this.width = parseInt(_width);
        this.height = parseInt(_height);
        this.totalArea = (() => {
            let i;
            let j;
            let tab1D;
            let tab2D = [];
            for (i = 0; i < this.height; i++) {
                tab2D.push((() => {
                    j = 0;
                    tab1D = [];
                    for (j; j < this.width; j++) {
                        tab1D.push(`□`);
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
        let areaHeight = this.totalArea.reduce((count, row) => count + row.length, 0);
        console.log(areaHeight);
        let areaWidth = this.totalArea.reduce((count, row) => count + row.length, 0);
        let gridString = "";

        for (y = 0; y< areaHeight; y++){
            for(x=0; x < areaWidth; x++){
                if (x < this.height){
                    if (this.totalArea[y][x] instanceof Point){
                        gridString += `\x1b[32m█ \x1b[0m`
                    }
                    else{
                        gridString += `\x1b[36m${this.totalArea[y][x]} \x1b[0m`
                    }
                }
                else{
                    if (this.totalArea[y][x] instanceof Point){
                        gridString += `\x1b[31m█ \x1b[0m`
                    }
                    else{
                        gridString += `\x1b[34m${this.totalArea[y][x]} \x1b[0m`
                    }
                }
            }
            gridString += `\n`;
        }
        return (gridString);
    }

    // getTotalGrid() {
    //     let i;
    //     let length;
    //     let grid = "";

    //     for (const tab of this.totalArea) {
    //         i = 0;
    //         length = tab.length;
    //         for (i; i < length; i++) {
    //             if (tab[i] instanceof Area){
    //                 if (){

    //                 }
    //                 else
    //                 grid += `\x1b[31m█ \x1b[0m`;

    //             }
    //             else
    //                 grid += `\x1b[34m${tab[i]} \x1b[0m`;
    //         }
    //         grid += `\n`;
    //     }
    //     return (grid);
    // }

}

let area = new Area(2, 2);
// let j = 30;
// for (let i = 0; i < 31; i++) {
//     area.totalArea[i][i] = new Point(i, i);
//     area.totalArea[i][j] = new Point(i, i);
//     j--;
// }
console.log(area.getGrid());