import {Menu} from './core/menu';

export class ContextMenu extends Menu {

    constructor(selector) {
        super(selector);

        this.el = document.querySelector(selector);

        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.open(event.clientY, event.clientX);
        })
    }

    open(top, left){
        this.el.classList.add('open');

        this.el.style = `top: ${top}px; left:${left}px;`
    }    
    
    close(){
        this.el.classList.remove('open');
    }
}