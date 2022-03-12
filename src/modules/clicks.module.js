import {
    Module
} from '../core/module'
let timeOne = 0
let dblClick = 0
let Click = 0
let inter
const body = document.querySelector('body')
export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.type = type
        this.text = text
    }
    trigger() {
        const second = prompt('Введите время под счета кликов. Число:').trim()
        if (isNaN(second)) {
            alert('Input error is not a number')
        } else {
            timeOne = second
            createElement(timeOne)
        }
    }
    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}

function createElement(time) {
    const span = document.createElement('span')
    span.className = 'timer'
    span.setAttribute('data-time', `${time}`)
    span.textContent = '00'
    body.append(span)
    body.addEventListener('click', () => Click++)
    body.addEventListener('dblclick', () => dblClick++)
    inter = setInterval(() => {
      decreaseTime(span)
    }, 1000)
  
  }
  
  
  
  function decreaseTime(span) {
    if (timeOne === 0) {
      Click -= (dblClick * 2)
      alert(`Сделано кликов одинарное: ${Click}, двойное ${dblClick}`)
      clearInterval(inter)
      span.remove()
    } else {
      let current = --timeOne;
      if (current < 10) {
        current = `0${current}`;
      }
      span.innerHTML = current
    }
  }