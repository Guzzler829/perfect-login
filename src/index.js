let capsAlertEl = document.getElementById('caps-alert');

let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");

//seledt the username input box first thing
usernameEl.focus();
usernameEl.select();

function processForm() {
    if (usernameEl.value === "admin" && passwordEl.value === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let dob = document.getElementById('dob');

let address = document.getElementById('address');
let apt = document.getElementById('apt');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');
let signUpButton = document.getElementById('sign-up-button');
let signUpError = document.getElementById('sign-up-error');



function signUp() {
    let errorMessageElements = [];
    if(!firstName.value) {
        errorMessageElements.push('first name');
    }
    if(!email.value) {
        errorMessageElements.push('email');
    }
    if(!dob.value) {
        errorMessageElements.push('date of birth')
    }
    if(!address.value) {
        errorMessageElements.push('street address')
    }
    if(!city.value) {
        errorMessageElements.push('city')
    }
    if(!state.value) {
        errorMessageElements.push('state')
    }
    if(!zip.value) {
        errorMessageElements.push('ZIP code')
    }
    //generate message
    let errorMessage = "You must include your ";
    for(let i = 0; i < errorMessageElements.length - 1; i++) {
        errorMessage += errorMessageElements[i] + ', '
    }
    errorMessage += 'and ' + errorMessageElements[errorMessageElements.length - 1] + '.';
    signUpError.innerText = errorMessage;
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'CapsLock') {
        capsAlertEl.classList.add('visible');
        console.log('caps on')
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'CapsLock') {
        capsAlertEl.classList.remove('visible');
        console.log('caps on')
    }
});