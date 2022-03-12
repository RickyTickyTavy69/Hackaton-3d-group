import {
    Module
} from '../core/module'
import {
    createElement
} from '../utils'
import {
    time
} from '../core/constants/setting'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }
    trigger() {
        const second = prompt('Введите время под счета кликов. Число:').trim()
        if (isNaN(second)) {
            alert('Input error is not a number')
        } else {
            time = second
            createElement(time)
        }
    }
    toHTML() {

    }
}