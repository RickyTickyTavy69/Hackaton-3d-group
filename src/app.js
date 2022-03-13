import './styles.css'
import { ShapeModule } from './modules/shape.module'

// Создание случайной фигуры случайного цвета
const randomShape = new ShapeModule('shape', 'Создать случайную фигуру');
randomShape.toHTML();
randomShape.trigger();




///////////  для теста - удалить при слиянии веток 
const itemAudio = randomShape.toHTML();
const ulHTML = document.querySelector('ul');
window.addEventListener('click', (event) => {
    const { target } = event;
    if (target) {

        randomShape.trigger();
        // ulHTML.append(itemAudio);
    }
})
//////////////////////////////////////////////