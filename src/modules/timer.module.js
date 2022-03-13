import {Module} from '../core/module'
export class timerModule extends Module {
   #time
   #timerContainer
   #timerArea
    
   constructor(time) {
        super('Timer', 'text')

        this.#time = time;
        this.#timerContainer = document.createElement('div')
        this.#timerArea = document.createElement('div')
    }

    render(time) {

        this.#timerContainer.id = 'timer';
        this.#timerContainer.className = 'board';
        if (time <10) {
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
}

