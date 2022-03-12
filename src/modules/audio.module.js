import {Module} from '../core/module'
import * as Utils from '../utils'

export class AudioModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        // const audioPlayer = document.createElement('audio');
        // audioPlayer.setAttribute('controls', '');

        // const sourceHTML = document.createElement('source');
        // sourceHTML.src = 'audio/new_message_tone.ogg';
        // audioPlayer.append(sourceHTML);
        // sourceHTML.setAttribute('type', 'audio/mp3');

        // document.body.append(audioPlayer);
    }
    
    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
    }

}