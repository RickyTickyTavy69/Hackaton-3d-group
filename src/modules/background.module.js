import {Module} from '../core/module'
import { getRandomColor } from '../utils'

const body = document.querySelector('body')
export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text) 
        this.type = type
        this.text = text
    }
    trigger() {
            const color = getRandomColor()
            body.style.backgroundColor = color
    }
    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}