function create2DArray(_width, _height) {

    function tab1D(_width) {
        let i = 0;
        let tab = [];
        for (i; i < _width; i++) {
            tab.push(0);
        }
        return (tab);
    }

    let i = parseInt(0);
    let tab2D = [];
    for (i; i < _height; i++) {
        tab2D.push(tab1D(_width));
    }
    return (tab2D);
}

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
        this.area = create2DArray(this.width, this.height);
    }

    getGrid() {
        let i = 0;
        let j;
        let grid = "";

        for (const tab of this.area) {
            j = 0;
            let camecasselescouilles = tab.length;
            for (j; j< tab.lenght; j++){
                console.log(grid);
                if (tab[j] instanceof Area){
                    grid += `+`;
                }
                grid += tab[j];
            }
        }
        return (grid);
    }

    // getGrid() {
    //     let i = 0;
    //     let j;
    //     let grid = "";

    //     for (i; i < this.area.lenght; i++) {
    //         j = 0;
    //         for (j; j< area[i].lenght; j++){
    //             if (this.area[i][j] instanceof Area){
    //                 grid += `+`;
    //             }
    //             grid += this.area[i][j];
    //         }
    //     }
    //     return (grid);
    // }
}

let area = new Area(6, 3);
console.log(area);

console.log(area.getGrid());