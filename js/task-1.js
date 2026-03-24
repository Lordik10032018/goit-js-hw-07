'use strict'
const categoryElem = document.querySelectorAll('.item')

console.log(`Number of categories: ${categoryElem.length}`);

const res = categoryElem.forEach((el) => {
    const title = el.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const items = el.querySelectorAll('li')
    console.log(`Elements: ${items.length}`);
})



