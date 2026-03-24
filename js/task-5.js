'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
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
  const randomColor = hexToRgb(getRandomHexColor());
  bodyElem.style.backgroundColor = randomColor;
  widgetSpanElem.textContent = randomColor
}





