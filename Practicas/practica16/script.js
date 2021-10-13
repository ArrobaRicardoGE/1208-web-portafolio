alert('hola');

alert(document.getElementById('header').textContent);
document.getElementById('header').textContent = 'Cambié el nombre';

// crear una función de llenado de lista
// llenar diez elementos con objetos de despensa

function llenarLista() {
    const arr = ['agua', 'leche', 'arroz', 'crema',
        'queso', 'manzana', 'jamón', 'cereal', 'pan', 'vino'
    ];
    let lista = document.getElementById('lista');
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].textContent = arr[i];
    }
}