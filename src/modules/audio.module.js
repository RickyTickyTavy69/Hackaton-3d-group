import {Module} from '../core/module'
import * as Utils from '../utils'

export class AudioModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    switchTreck(player, randNum) {
        player.src = `../audio/gameshow_${randNum}.mp3`;
        player.play();
    }

    trigger() {
        this.hide();
        const bodyHTML = document.querySelector('body');
        const audioPlayer = document.createElement('audio');
        // audioPlayer.setAttribute('controls', '');

        const randomNumber = Utils.random(1, 15);
        const sourceHTML = document.createElement('source');
        sourceHTML.setAttribute('type', 'audio/mp3');
        this.switchTreck(audioPlayer, randomNumber);
        audioPlayer.append(sourceHTML);
        bodyHTML.append(audioPlayer);
    }

    hide() {
        const audioHTML = document.querySelector('audio');
        if (audioHTML) {
            audioHTML.remove();
        }
    }
    
    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
    }

}