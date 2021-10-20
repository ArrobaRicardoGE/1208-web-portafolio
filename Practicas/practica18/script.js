const buttons = document.getElementsByTagName('input');
for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].hasAttribute('checked')) {
        alert('El botón ' + (i + 1) + ' está seleccionado')
    }
}