import './styles.css'
import { timerModule } from '../src/modules/timer.module';

class App {
    #timerModule;

    constructor() {
        this.#timerModule = new timerModule()
    }

    run() {
        const timeString = prompt('Введите время таймера')
        const timeNumber = parseInt(timeString);
        const timerHTML = this.#timerModule.render(timeNumber);
        document.body.append(timerHTML);
        this.#timerModule.startTimer(timeNumber);        
    }
}

const app = new App()
app.run()


