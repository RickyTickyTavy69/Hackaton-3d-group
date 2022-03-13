
import './styles.css';
import { ContextMenu } from '../src/menu.js';
let siteMenu = new ContextMenu('.menu');

import { BackgroundModule } from './modules/background.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
import { AudioModule } from './modules/audio.module';
import { ClicksModule } from './modules/clicks.module';
import { EmailModule } from './modules/email.module';
 

let backgroundModule = new BackgroundModule('background', 'поменять цвет');
let timerModule = new TimerModule('timer', 'таймер');
let shapeModule = new ShapeModule('shape', 'добавить фигуру');
let audioModule = new AudioModule('audio', 'рандомный звук');
let clicksModule = new ClicksModule('clicks', 'считать клики');
let emailmodule = new EmailModule('email', 'отправить Емэйл');


siteMenu.add(backgroundModule);
siteMenu.add(timerModule);
siteMenu.add(shapeModule);
siteMenu.add(emailmodule);
siteMenu.add(audioModule);
siteMenu.add(clicksModule);

siteMenu.el.addEventListener('click', (event) => {

    shapeModule.hide();

    switch (event.target.dataset.type) {
        case 'background':
        siteMenu.close();
        backgroundModule.trigger();
        break;

        case 'timer':
        siteMenu.close();
        timerModule.trigger();
        break;
        
        case 'shape':
        siteMenu.close();
        shapeModule.trigger();
        break;
        
        case 'audio':
        siteMenu.close();
        audioModule.trigger();
        break;
        
        case 'clicks':
        siteMenu.close();
        clicksModule.trigger();
        break;

        case 'email':
        siteMenu.close();
        emailmodule.trigger();
        break;

    } 
})







    
        
                
    











