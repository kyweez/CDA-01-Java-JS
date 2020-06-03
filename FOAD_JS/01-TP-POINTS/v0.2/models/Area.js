function create2DArray(_width, _height) {

    function tab1D(_width) {
        let i = 0;
        let tab = [];
        for (i; i < _width; i++) {
            tab.push(`□`);
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
        let i;
        let length;
        let grid = "";

        for (const tab of this.area) {
            i = 0;
            length = tab.length;
            for (i; i < length; i++) {
                if (tab[i] instanceof Area)
                    grid += `\x1b[31m█ \x1b[0m`;
                else
                    grid += `\x1b[34m${tab[i]} \x1b[0m`;
            }
            grid += `\n`;
        }
        return (grid);
    }
}

let area = new Area(31, 31);
let j = 30;
for (let i = 0; i < 31; i++) {
    area.area[i][i] = new Area(i, i);
    area.area[i][j] = new Area(i, i);
    j--;
}
console.log(area.getGrid());