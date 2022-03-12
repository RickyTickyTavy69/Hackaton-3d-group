import './styles.css'

import { AudioModule } from './modules/audio.module'

// случайный звук
const randomAudio = new AudioModule('audio', 'Случайный звук');
randomAudio.toHTML();
// randomAudio.trigger();


window.addEventListener('click', (event) => {
    const { target } = event;
    if (target) {
        randomAudio.trigger();
    }
})