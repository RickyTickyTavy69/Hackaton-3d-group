
import './styles.css';
import { ContextMenu } from '../src/menu.js';
let siteMenu = new ContextMenu('.menu');

//import { BackgroundModule } from './modules/background.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
import { AudioModule } from './modules/audio.module';
//import { ClicksModule } from './modules/clicks.module';
import { EmailModule } from './modules/email.module';
 

//let backgroundModule = new BackgroundModule('background', 'change color');
let timerModule = new TimerModule('timer', 'set timer');
let shapeModule = new ShapeModule('shape', 'add ramdom shape');
let audioModule = new AudioModule('audio', 'make a sound');
//let clicksModule = new ClicksModule('clicks', 'start click counter');
let emailmodule = new EmailModule('email', 'send an Email');


//siteMenu.add(backgroundModule);
siteMenu.add(timerModule);
siteMenu.add(shapeModule);
siteMenu.add(emailmodule);
siteMenu.add(audioModule);
//siteMenu.add(clicksModule);

siteMenu.el.addEventListener('click', (event) => {

    switch (event.target.dataset.type) {
        //case 'background':
        //backgroundModule.trigger();
        //siteMenu.close();
        //break;

        case 'timer':
            timerModule.trigger();
            siteMenu.close();
        break;
        
        
        case 'shape':
            shapeModule.trigger();
            siteMenu.close();
        break;
        
        
        case 'audio':
            audioModule.trigger();
            siteMenu.close();
        break;
        
        /*
        case 'clicks':
            clicksModule.trigger();
            siteMenu.close();
        break;*/

        case 'email':
            emailmodule.trigger();
            siteMenu.close();
        break;

    } 
})







    
        
                
    











