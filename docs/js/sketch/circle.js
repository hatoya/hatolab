"use strict";
var p5 = require('p5');
var Circle = (function () {
    function Circle() {
    }
    Circle.prototype.draw = function (x, y) {
        p5.ellipse(x, y, 3, 3);
    };
    return Circle;
}());
exports.Circle = Circle;
