import { Module } from '../core/module'
import * as Utils from '../utils'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    hide() {
        const shapeHTML = document.querySelector('.shape');
        if (shapeHTML) {
            shapeHTML.style.opacity = '0';
            shapeHTML.style.visibility = 'hidden';
            shapeHTML.style.transition = '2.5s opacity, 2.5s visibility';
            setTimeout(() => {
                shapeHTML.remove();
            }, 3500);
        }
    }

    trigger() {
        this.hide();
        const shapes = ['квадрат', 'круг', 'прямоугольник'];
        const randomShapeName = shapes[Utils.random(0, shapes.length - 1)];
        const params = this.getParams(randomShapeName);
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.height = `${params.shapeHeight}px`;
        shape.style.width = `${params.shapeWidth}px`;
        shape.style.marginTop = `${params.topMargin}px`;
        shape.style.marginLeft = `${params.leftMargin}px`;
        shape.style.background = params.shapeColor;
        shape.style.borderRadius = params.borderRadius;
        shape.style.position = 'absolute';
        document.body.prepend(shape);
    }

    getParams(shapeForm) {
        const bodyHTML = document.querySelector('body');
        const bodyPadding = 64;
        const bodyHeight = bodyHTML.clientHeight - bodyPadding;
        const bodyWidth = bodyHTML.clientWidth - bodyPadding;
        let shapeHeight;
        let shapeWidth;
        let topMargin;
        let leftMargin;
        let borderRadius;
        if (shapeForm === 'квадрат' || shapeForm === 'круг') {

            if (bodyHeight < bodyWidth) {
                shapeHeight = Utils.random(10, bodyHeight);
                shapeWidth = shapeHeight;
            } else {
                shapeWidth = Utils.random(10, bodyWidth);
                shapeHeight = shapeWidth;
            }

            if (shapeForm === 'круг') {
                borderRadius = '50%';
            }

            topMargin = Utils.random(0, bodyHeight - shapeHeight);
            leftMargin = Utils.random(0, bodyWidth - shapeWidth);
        } else if (shapeForm === 'прямоугольник') {
            shapeHeight = Utils.random(10, bodyHeight);
            shapeWidth = Utils.random(10, bodyWidth);
            topMargin = Utils.random(0, bodyHeight - shapeHeight);
            leftMargin = Utils.random(0, bodyWidth - shapeWidth);
        }
        const shapeColor = Utils.getRandomColor();
        return {shapeHeight, shapeWidth, topMargin, leftMargin, shapeColor, borderRadius};
    }
}