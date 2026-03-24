'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const widgetElem = document.querySelector('.widget')
const bodyElem = document.querySelector('body');
const textElem = widgetElem.querySelector('p')

const widgeetBtnElem = document.querySelector('.change-color');
const widgetSpanElem = document.querySelector('.color');

textElem.classList.add('widget-text')
widgeetBtnElem.classList.add('widget-btn')

widgeetBtnElem.addEventListener('click', handleWidgetBtnClick)
function handleWidgetBtnClick() {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  widgetSpanElem.textContent = randomColor
}





