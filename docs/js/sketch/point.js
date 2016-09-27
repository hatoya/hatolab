"use strict";
var p5 = require('p5');
var Point = (function () {
    function Point(_x, _y) {
        this.x = _x;
        this.y = _y;
        // this.z = noise(x / 100, y / 100, float(frameCount) / 100);
    }
    Point.prototype.update = function () {
        // this.z = noise(x / 100, y / 100, float(frameCount) / 100);
    };
    Point.prototype.draw = function (p) {
        p.push();
        if (this.x > 5 && this.y > 5) {
            p.translate(this.x, this.y);
            p.rotate(this.z * PI * 2);
            p.noStroke();
            p.fill(255);
            p.ellipse(10, 0, 3 * this.z, 3 * this.z);
        }
        p.pop();
    };
    return Point;
}());
exports.Point = Point;
