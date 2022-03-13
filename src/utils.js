export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

import * as setting from './core/constants/setting'

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function createElement(time) {
  console.log('works');
  const span = document.createElement('span')
  span.className = 'timer'
  span.setAttribute('data-time', `${time}`)
  span.textContent = '00'
  document.body.append(span)
  document.body.addEventListener('click', () => setting.Click++)
  document.body.addEventListener('dblclick', () => setting.dblClick++)
  setting.inter = setInterval(() => {
    decreaseTime(span)
  }, 1000)

}



function decreaseTime(span) {
  if (time === 0) {
    setting.Click -= (setting.dblClick * 2)
    alert(`Сделано кликов одинарное: ${setting.Click}, двойное ${setting.dblClick}`)
    clearInterval(setting.inter)
    span.remove()
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    span.innerHTML = current
  }
}