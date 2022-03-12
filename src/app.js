import './styles.css'
import { ShapeModule } from './modules/shape.module'

// Создание случайной фигуры случайного цвета
const randomShape = new ShapeModule('shape', 'Создать случайную фигуру');
randomShape.toHTML();
randomShape.trigger();

