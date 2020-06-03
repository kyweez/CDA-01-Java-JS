const Point = require(`../models/Point.js`);

class Test {
    test1() {
        // VARIABLES INSTANCIATION & ASSIGNMENTS (p1, p2, p3)
        let p1 = new Point(0, 1);
        let p2 = new Point(2, 3);
        let p3 = new Point(4, 5);

        // VARIABLES INSTANCIATION & ASSIGNMENTS (p4, p5)
        let p4;
        let p5;

        // p1, p2 & p3 COORDINATE PRINTING
        console.log(p1);     // supposed to display : Point { x: 0, y: 1 }
        console.log(p2);     // supposed to display : Point { x: 2, y: 3 }
        console.log(p3);     // supposed to display : Point { x: 4, y: 5 }

        // p4 ASSIGNEMENT
        p4 = p3.duplicate();

        // TESTING DUPLICATE FUNCTION AND CHECKING IF SIDE EFFECTS APPEARED
        console.log(p3 !== p4);         // supposed to display : true
        console.log(p3.toString());     // supposed to display : (4,5)
        console.log(p4.toString());     // supposed to display : (4,5)

        // COPIES p1 COORDINATES INTO p2
        p2.copy(p1);

        // TESTING COPY FUNCTION AND CHECKING IF SIDE EFFECTS APPEARED
        console.log(p1 !== p2);         // supposed to display : true
        console.log(p1.toString());     // supposed to display :  (0,1)
        console.log(p2.toString());     // supposed to display :  (0,1)

        // SWAP p1 & p2 VALUES AND CHECKING THE RESULT
        p1.rabbit(p3);
        console.log(p1 !== p3);         // supposed to display : true
        console.log(p1.toString());     // supposed to display :  (4,5)
        console.log(p3.toString());     // supposed to display :  (0,1)
    }
};

module.exports = Test;