let a, b, letra;

function sumar_y_mostrar() {
    alert(parseInt(a) + parseInt(b));
}

function pedir_datos() {
    a = prompt('Ingresa un número');
    b = prompt('Ingresa otro número');
}

function sumar_y_mostrar_P(a, b, c) {
    let ans = parseInt(a) + parseInt(b) + parseInt(c);
    alert('El resultado es: ' + ans);
}

function dameUnaLetra() {
    letra = prompt('Dame una letra');
}

function esVocal() {
    switch (letra) {
        case 'a':
            alert('Es vocal!');
            break;
        case 'e':
            alert('Es vocal!');
            break;
        case 'i':
            alert('Es vocal!');
            break;
        case 'o':
            alert('Es vocal!');
            break;
        case 'u':
            alert('Es vocal!');
            break;
    }
}