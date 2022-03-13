import './styles.css'
import { TimerModule } from '../src/modules/timer.module';

class App {
    #timerModule;

    constructor() {
        this.#timerModule = new TimerModule('Таймер', 'привет')
    }

    run() {
        this.#timerModule.trigger()
                
    }
}

const app = new App()
app.run()


