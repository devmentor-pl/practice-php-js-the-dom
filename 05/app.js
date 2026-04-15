const form = document.querySelector('form');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    messagesContainer.innerHTML = '';
    const errors = [];

    const email = document.querySelector('#formLogin').value;
    const pass1 = document.querySelector('#formPass1').value;
    const pass2 = document.querySelector('#formPass2').value;
    const accept = document.querySelector('#formAccept').checked;

    // 1. Walidacja Email
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegExp.test(email)) {
        errors.push("Adres e-mail jest nieprawidłowy.");
    }

    // 2. Walidacja Haseł
    if (pass1.length < 8) {
        errors.push("Hasło musi mieć co najmniej 8 znaków.");
    }
    if (pass1 !== pass2) {
        errors.push("Hasła nie są identyczne.");
    }

    // 3. Walidacja Regulaminu
    if (!accept) {
        errors.push("Musisz zaakceptować regulamin.");
    }

    // Wyświetla listę błędów
    if (errors.length > 0) {
        errors.forEach(err => {
            const p = document.createElement('p');
            p.textContent = err;
            p.style.color = 'red';
            messagesContainer.appendChild(p);
        });
    } else {
        // Sukces
        const successMessage = document.createElement('p');
        successMessage.textContent = "Dane zostały wysłane prawidłowo!";
        successMessage.style.color = 'green';
        messagesContainer.appendChild(successMessage);
        
        console.log("Formularz wysłany pomyślnie");
    }
});
