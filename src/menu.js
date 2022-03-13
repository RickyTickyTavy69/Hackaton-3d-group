import {Menu} from './core/menu';

export class ContextMenu extends Menu {

    constructor(selector) {
        super(selector);

        this.el = document.querySelector(selector);

        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            let left = event.clientX;
            let top = event.clientY;
            if ((window.screen.width - event.clientX) < 240){
                left = event.clientX - 200;
            }
            if ((window.screen.height - event.clientY) < 500) {
                top = event.clientY - 200;
            } 
            this.open(top, left);
        })
    }

    open(top, left){
        this.el.classList.add('open');
        this.el.style = `top: ${top}px; left:${left}px;`
    }    
    
    close(){
        this.el.classList.remove('open');
    }

    add(module){
        this.el.innerHTML += module.toHTML();
    }
}