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
        if (!(_point instanceof Point))
            return (false);
        this.x = _point.x;
        this.y = _point.y;
        return (true);
    }

    /**
     * The coordinates of the current instance and the "Point" given as an argument are swapped
     * @param Point _point 
     */
    rabbit(_point) {
        if (_point instanceof Point)
            return (false);
        let temp = this.duplicate(this);
        this.move(_point.x, _point.y);
        _point.copy(temp);
        return (true);
    }
}

module.exports = Point;