import {Module} from '../core/module'
export class TimerModule extends Module {
   #time
   #timerContainer
   #timerArea
    
   constructor(type, text) {
        super(type, text);
        this.#timerContainer = document.createElement('div');
        this.#timerArea = document.createElement('div');
        this.type = type;
        this.text = text;

    }

    render(time) {

        this.#timerContainer.id = 'timer';
        this.#timerContainer.className = 'board';
          if (time <10 && time !== ' ' ) {
            time = `0${time}` 
           }
        this.#timerArea.textContent = time;
        this.#timerArea.className = 'timer';

        this.#timerContainer.append(this.#timerArea)

        return this.#timerContainer;
        
    }

    startTimer(time) {
        const interval = setInterval(() => {
            if (time === 0) {
                this.finishTimer()
                clearInterval(interval)
                
                
            } else {
                let current = --time
                if (current <10) {
                   current = `0${current}` 
                  }
              this.setTime(current)
               }
   
        }, 1000)
   
    }    

    setTime(value) {
        this.#timerArea.textContent = value;
    }
    
    finishTimer() {
            this.#timerContainer.remove() 
            alert('Время вышло')
            
    }

    trigger() {
        const timeString = prompt('Введите время таймера');

            const timeNumber = parseInt(timeString)
            const testInput = isNaN(timeNumber);
            if (!testInput) {
            const timerHTML = this.render(timeNumber);
            document.body.append(timerHTML);
            this.startTimer(timeNumber);
            } else {
                alert('Вы не ввели время таймера')
            }
    }
}


