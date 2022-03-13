import './styles.css'

import { ShapeModule } from './modules/shape.module'
import { AudioModule } from './modules/audio.module'

// Создание случайной фигуры случайного цвета
const randomShape = new ShapeModule('shape', 'Создать случайную фигуру');
randomShape.toHTML();
randomShape.trigger();

// случайный звук
const randomAudio = new AudioModule('audio', 'Случайный звук');
randomAudio.toHTML();
randomAudio.trigger();