import { Module } from '../core/module'
import * as Utils from '../utils'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const params = this.getParams();
        const shape = document.createElement('div');
        shape.style.height = `${params.shapeHeight}px`;
        shape.style.marginTop = `${params.topMargin}px`;
        shape.style.marginLeft = `${params.leftMargin}px`;
        shape.style.background = params.shapeColor;

        const shapes = ['квадрат', 'круг', 'прямоугольник'];
        const randomNumber = Utils.random(0, shapes.length - 1);
        
        const randomShapeName = shapes[randomNumber];
        if (randomShapeName === 'квадрат') {
            shape.style.width = `${params.shapeHeight}px`;
        } else  if (randomShapeName === 'круг') {
            shape.style.width = `${params.shapeHeight}px`;
            shape.style.borderRadius = '50%';
        } else if (randomShapeName === 'прямоугольник') {
            shape.style.width = `${params.shapeWidth}px`;
        }
        document.body.prepend(shape);
    }

    getParams() {
        const bodyHeight = document.documentElement.clientHeight;
        const bodyWidth = document.documentElement.clientWidth;
        const shapeHeight = Utils.random(10, bodyHeight);
        const shapeWidth = Utils.random(10, bodyWidth);
        const topMargin = Utils.random(0, bodyHeight - shapeHeight - 64);
        const leftMargin = Utils.random(0, bodyWidth - shapeWidth - 64);
        const shapeColor = Utils.getRandomColor();
        return {shapeHeight, shapeWidth, topMargin, leftMargin, shapeColor};
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
      }
}
