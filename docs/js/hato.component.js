"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var circle_1 = require('./sketch/circle');
var p5 = require('p5');
var HatoComponent = (function () {
    function HatoComponent(elRef, circle) {
        this.elRef = elRef;
        this.circle = circle;
        this.element = elRef.nativeElement;
    }
    HatoComponent.prototype.ngOnInit = function () {
        var sketch = new p5(this.sketch, this.element);
    };
    HatoComponent.prototype.sketch = function (p) {
        var width = window.innerWidth, height = window.innerHeight, space = 5, gifFrame = 0, gifFlag = false;
        var points = [];
        p.setup = function () {
            p.createCanvas(width, height);
            p.background(0);
            for (var x = 0; x * space < width; x++) {
                var tmpPoints = [];
                for (var y = 0; y * space < height; y++) {
                    var point = new Point(x * space, y * space, p);
                    tmpPoints.push(point);
                }
                points.push(tmpPoints);
            }
        };
        p.draw = function () {
            p.background(0);
            for (var x = 0; x * space < width; x++) {
                for (var y = 0; y * space < height; y++) {
                    points[x][y].update(p);
                    points[x][y].draw(p);
                }
            }
        };
    };
    HatoComponent = __decorate([
        core_1.Component({
            selector: 'hato-app',
            template: '<div class="c-logo"><img src="./img/logo.png" alt="HATO LAB" class="c-logo__logo"></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, circle_1.Circle])
    ], HatoComponent);
    return HatoComponent;
}());
exports.HatoComponent = HatoComponent;
var Point = (function () {
    function Point(x, y, p) {
        this.x = x;
        this.y = y;
        this.z = p.noise(this.x / 100, this.y / 100, p.frameCount / 1000);
    }
    Point.prototype.update = function (p) {
        this.z = p.noise(this.x / 100, this.y / 100, p.frameCount / 100);
    };
    Point.prototype.draw = function (p) {
        p.push();
        p.translate(this.x + 10, this.y);
        p.rotate(this.z * p.PI * 2);
        p.noStroke();
        p.fill(255);
        p.ellipse(10, 0, 3 * this.z, 3 * this.z);
        p.pop();
    };
    return Point;
}());
exports.Point = Point;
