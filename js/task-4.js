'use strict'

const formElem = document.querySelector('.login-form')

formElem.addEventListener('submit', handleFormElemSubmit)

function handleFormElemSubmit(event) {
    event.preventDefault()
    const refs = {
        email: formElem.elements.email.value.trim(),
        password: formElem.elements.password.value.trim()
    }
    const email = refs.email.length;
    const password = refs.password.length;
    const check = email >= 5 && password >= 5;
    if (!(check)) {
        alert('All form fields must be filled in')
    }
    console.log(refs);
    formElem.reset()
}


