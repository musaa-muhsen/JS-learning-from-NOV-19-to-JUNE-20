// form blue event listeners 
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zip').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);

// The test() method tests for a match in a string.
//This method returns true if it finds a match, otherwise it returns false.

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/; // a-z upper and lower between 2-10

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const name = document.getElementById('zip');
    // const re = /^[a-zA-Z]{2,10}$/; <- usa postcode  
    const re = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/i; // uk postcode 
    //  'i' needs to be added to the end of the regular expression in order to make it case insensitive

    if (!re.test(name.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');

    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,5}$/;

    if (!re.test(name.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

}


function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/; // uk phone number the | means OR, so you have and to escape it like this: \|

    if (!re.test(name.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }

}