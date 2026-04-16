const form = document.querySelector('form');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    messagesContainer.innerHTML = '';
    const errors = [];

    const fields = [
        { name: 'login', label: 'formLogin', required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
        { name: 'pass1', label: 'formPass1', required: true, pattern: /^.{8,}$/ },
        { name: 'pass2', label: 'formPass2', required: true },
        { name: 'accept', label: 'formAccept', required: true },
    ];

    fields.forEach(function (field) {
        const element = form.elements[field.name];
        const value = element.type === 'checkbox' ? element.checked : element.value;

        if (field.required && !value) {
            errors.push(`${field.name} jest wymagane.`);
        } else if (field.pattern && !field.pattern.test(value)) {
            errors.push(`${field.name} ma nieprawidłowy format.`);
        }
    });

    if (form.elements['pass1'].value !== form.elements['pass2'].value) {
        errors.push('Hasła muszą być identyczne.');
    }

    if (errors.length === 0) {
        alert('Dane zostały wypełnione prawidłowo!');
        form.reset();
    } else {
        errors.forEach(function (text) {
            const p = document.createElement('p');
            p.innerText = text;
            messagesContainer.appendChild(p);
        });
    }
});