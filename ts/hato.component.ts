import { Component, ElementRef } from '@angular/core'
import { Circle } from './sketch/circle'

let p5 = require('p5')

@Component({
    selector: 'hato-app',
    template: '<div class="c-logo"><img src="./img/logo.png" alt="HATO LAB" class="c-logo__logo"></div>'
})
export class HatoComponent {
    private element: any

    constructor(private elRef: ElementRef, private circle: Circle) {
        this.element = elRef.nativeElement
    }

    ngOnInit() {
        let sketch = new p5(this.sketch, this.element)
    }

    sketch(p: any) {
        let width = window.innerWidth,
            height = window.innerHeight,
            space = 5,
            gifFrame = 0,
            gifFlag = false

        let points: Point[][] = []

        p.setup = function() {
            p.createCanvas(width, height)
            p.background(0)

            for(let x = 0; x * space < width; x++) {
                let tmpPoints: Point[] = []
                for(let y = 0; y * space < height; y++) {
                    let point: Point = new Point(x * space, y * space, p)
                    tmpPoints.push(point)
                }
                points.push(tmpPoints)
            }
        }

        p.draw = function() {
            p.background(0)

            for(let x = 0; x * space < width; x++) {
                for(let y = 0; y * space < height; y++) {
                    points[x][y].update(p)
                    points[x][y].draw(p)
                }
            }
        }
    }
}

export class Point {
    private x: any
    private y: any
    private z: any

    constructor(x: any, y: any, p: any) {
        this.x = x
        this.y = y
        this.z = p.noise(this.x / 100, this.y / 100, p.frameCount / 1000)
    }

    public update(p: any) {
        this.z = p.noise(this.x / 100, this.y / 100, p.frameCount / 100)
    }

    public draw(p: any) {
        p.push();
        p.translate(this.x + 10, this.y);
        p.rotate(this.z * p.PI * 2);
        p.noStroke();
        p.fill(255);
        p.ellipse(10, 0, 3 * this.z, 3 * this.z);
        p.pop();
    }
}