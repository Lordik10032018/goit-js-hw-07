'use strict'

const strokeFormElem = document.querySelector('input[id="name-input"]');
const spanFormElem = document.querySelector('span[id="name-output"]')
strokeFormElem.addEventListener('input', handleStrokeFormElemInput)

function handleStrokeFormElemInput() {
    const strokeValue = strokeFormElem.value.trim();
    if (strokeValue.length < 1) {
        spanFormElem.textContent = 'Anonymous';
    } else {
        spanFormElem.textContent = strokeValue
    }
}

