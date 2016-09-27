let p5 = require('p5')

export class Circle {
    constructor() {

    }

    draw(x: any, y: any) {
        p5.ellipse(x, y, 3, 3)
    }
}