/**
 * JAVASCRIPT:  Exercise
 * 
 * Definition of a "Point"
 * 
 * 
 * RULES : 
 * 1) Read the description and look at the "Point" class below (partially implemented)
 * 2) Implement the following functions:
 *      - move (int x, int y): Defines new coordinates (x = abscissa, y = ordinate)
 *      - duplicate (): Returns a new instance of "Point" with the same coordinates as the current instance
 *      - copy (Point _point): Copies the coordinates of the "Point" given as an argument in the current instance
 *      - rabbit (Point _point): The coordinates of the current instance and the "Point" given as an argument are swapped
 * 
 * RESTRICTIONS:
 *      - The body of the "rabbit" function can only have a maximum of 3 instructions and musn't use the creation of other functions!
 */

// ###  The small program that follows the class must work as it is (unmodified) ###

/**
 * The "Point" class represents the coordinates of a point in a 2-dimensional area
 */
class Point {
    /**
     * Constructor: Initializes a new instance of the "Point" class
     * @param int _x Horizontal coordinate of the point (abscissa). Negative value accepted
     * @param int _y Vertical coordinate of the point (ordinate). Negative value accepted
     */
    constructor(_x, _y) {
        this.x = parseInt(_x || 0);
        this.y = parseInt(_y || 0);
    }

    /**
     * Returns a textual representation of the Point
     * @return string (coordinate of the Point)
     */
    toString() {
        return (`(${this.x},${this.y})`);
    }

    /**
     * This function defines new coordinates (x = abscissa, y = ordinate)
     * @param int _x 
     * @param int _y 
     */
    move(_x, _y) {
        this.x = parseInt(_x || 0);
        this.y = parseInt(_y || 0)
    }

    /**
     * @return A new instance of "Point" with the same coordinates as the current instance
     */
    duplicate() {
        return (new Point(this.x, this.y));
    }

    /**
     * This function copies the coordinates of the "Point" given as an argument in the current instance
     * @param Point _point 
     */
    copy(_point) {
        this.x = _point.x;
        this.y = _point.y;
    }

    /**
     * The coordinates of the current instance and the "Point" given as an argument are swapped
     * @param Point _point 
     */
    rabbit(_point) {
        let temp = this.duplicate(this);
        this.move(_point.x, _point.y);
        _point.copy(temp);
    }
}

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