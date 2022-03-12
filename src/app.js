import './styles.css'
import { ShapeModule } from './modules/shape.module'

// Создание случайной фигуры случайного цвета
const randomShape = new ShapeModule('shape', 'Создать случайную фигуру');
randomShape.toHTML();
// randomShape.trigger();

const ev = document.querySelector('body');
ev.addEventListener('click', (event) => {
    const {target} = event;
    if (target) {
        randomShape.trigger();
    }
})

