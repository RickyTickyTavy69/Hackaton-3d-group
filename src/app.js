import './styles.css'

import {ContextMenu} from '../src/menu.js'

let siteMenu = new ContextMenu('.menu');

siteMenu.changeColor = function() {
    body.style = 'background: #88B2B2;'
}

