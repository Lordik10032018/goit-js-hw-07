'use strict'

const formElem = document.querySelector('.login-form')
const formLabelArray = formElem.querySelectorAll('label')
const formBtn = formElem.querySelector('button')


formLabelArray.forEach(el => el.classList.add('form-label'))
formElem.elements.password.classList.add('stroke-basic', 'form-stroke')
formElem.elements.email.classList.add('stroke-basic', 'form-stroke')
formBtn.classList.add('form-btn')

formElem.addEventListener('submit', handleFormElemSubmit)
function handleFormElemSubmit(event) {
    event.preventDefault()
    // data -------------------
    const refs = {
        email: formElem.elements.email.value.trim(),
        password: formElem.elements.password.value.trim()
    }
    // data end -------------------
    
    // checking -------------------
    const email = refs.email.length;
    const password = refs.password.length;
    const check = email >= 5 && password >= 5;
    if (!(check)) {
        alert('All form fields must be filled in')
    } else {console.log(refs)}
    // checking end -------------------

    
    formElem.reset()
}




