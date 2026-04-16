const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const form = document.querySelector('form');
const emailInput = document.querySelector('#formLogin');
const pass1Input = document.querySelector('#formPass1');
const pass2Input = document.querySelector('#formPass2');
const acceptCheckbox = document.querySelector('#formAccept');

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', function(e) {
    let isError = false; 

    // 1. Walidacja Email
    if (!emailRegExp.test(emailInput.value)) {
        emailInput.style.border = '2px solid red';
        isError = true;
    } else {
        emailInput.style.border = '';
    }

    // 2. Walidacja haseł
    if (pass1Input.value !== pass2Input.value || pass1Input.value === "") {
        pass1Input.style.border = '2px solid red';
        pass2Input.style.border = '2px solid red';
        isError = true;
    } else {
        pass1Input.style.border = '';
        pass2Input.style.border = '';
    }

    // 3. Walidacja checkboxa
    if (!acceptCheckbox.checked) {
        acceptCheckbox.parentElement.style.color = 'red';
        isError = true;
    } else {
        acceptCheckbox.parentElement.style.color = '';
    }

    // Jeśli wystąpił błąd - zatrzymaj
    if (isError) {
        e.preventDefault();
        console.log("Formularz zawiera błędy.");
    } else {
         e.preventDefault(); 
        // Sukces
        const userData = {
            login: emailInput.value,
            pass: pass1Input.value,
            accepted: acceptCheckbox.checked
        };
        console.log("Sukces!", userData);
    }
});
