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
    const spanTime = document.querySelector('.click-count')
    const second = (prompt('Введите время под счета кликов. Число:')).trim()
    if (isNaN(second)) {
      alert('Input error is not a number')
    } else {
      timeOne = second
      document.addEventListener('click', clickOut)
      document.addEventListener('dblclick', dblClickOut)
      if (spanTime) {
        alert('Таймер уже запушен.')
      } else {
        createElement(timeOne)
      }
    }
  }
  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}
/*=======одинарный клик====== */
function clickOut() {
  Click++
}
/*=======двойной клик====== */
function dblClickOut() {
  dblClick++
}
/*==========окно таймера============*/
function createElement(time) {
  const span = document.createElement('span')
  span.className = 'click-count'
  span.setAttribute('data-time', `${time}`)
  span.textContent = '00'
  body.append(span)


  inter = setInterval(() => {
    decreaseTime(span)
  }, 1000)

}


/*==========Таймер для клика============ */
function decreaseTime(span) {
  if (timeOne === 0) {
    Click -= (dblClick * 2)
    document.removeEventListener('dblclick', dblClickOut)
    document.removeEventListener('click', clickOut)
    alert(`Сделано кликов одинарное: ${Click}, двойное ${dblClick}`)
    dblClick = 0
    Click = 0
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