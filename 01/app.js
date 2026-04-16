console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const newButton = document.createElement('button');

// 1. Ustawienie atrybutów
for (const key in buttonSettings.attr) {
    newButton[key] = buttonSettings.attr[key];
}

// 2. Ustawienie tekstu
newButton.textContent = buttonSettings.text;

// 3. Ustawienie stylów CSS

for (const key in buttonSettings.css) {
    newButton.style[key] = buttonSettings.css[key];
}

const parent = document.querySelector('.parent-for-button');
if (parent) {
    parent.appendChild(newButton);
}