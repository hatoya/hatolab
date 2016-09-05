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
var p5 = require('p5');
var HatoComponent = (function () {
    function HatoComponent(elRef) {
        this.element = elRef.nativeElement;
    }
    HatoComponent.prototype.ngOnInit = function (elRef) {
        var app = new p5(this.sketch, this.element);
    };
    HatoComponent.prototype.sketch = function (p) {
        p.setup = function () {
            p.createCanvas(window.innerWidth, window.innerHeight);
            p.background(0);
            p.noStroke();
        };
        p.draw = function () {
            p.fill(255);
            p.line(255);
            p.ellipse(p.mouseX, p.mouseY, 5, 5);
            p.background(0, 10);
        };
    };
    HatoComponent = __decorate([
        core_1.Component({
            selector: 'hato-app',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HatoComponent);
    return HatoComponent;
}());
exports.HatoComponent = HatoComponent;
