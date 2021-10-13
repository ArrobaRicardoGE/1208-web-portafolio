let arreglo = ['manzana', '2', 'plátano'];

console.log(arreglo);
// alert(arreglo);

console.log(arreglo[0].toUpperCase());
console.log(arreglo[2].toLowerCase());
console.log(arreglo[1].charAt(0));

console.log(arreglo[0].indexOf('z'));
console.log(arreglo[1].indexOf('z'));
console.log(arreglo[2].lastIndexOf('a'));

alert("tu arreglo es de tamaño: " + arreglo.length);
alert('tu arreglo es de tamaño: '.concat(arreglo.length));

let mensaje = 'Hola Mundo';
let porcion = mensaje.substring(2); // porcion = "la Mundo"
console.log(porcion);
porcion = mensaje.substring(5, 7); // porcion = "Mu"
console.log(porcion);
porcion = mensaje.substring(7); // porcion = "ndo"
console.log(porcion);
porcion = mensaje.substring(5, 0); // porcion = "Hola "
console.log(porcion);
porcion = mensaje.substring(0, 5); // porcion = "Hola "
console.log(porcion);

mensaje = "Hola mundo, soy una cadena de texto!";
let palabras = mensaje.split(' ');
console.log(palabras);

let palabra = "hola";
letras = palabra.split(""); // letras = [h,o,l,a]
alert(letras);

mensaje = palabras.join(".");
// alert(mensaje);

alert(palabras);
palabras.pop();
alert(palabras);


arreglo = ['manzana', 'kiwi', 'naranja'];
arreglo.pop();
arreglo.shift();
arreglo.unshift('cereza');
alert(arreglo);
alert(arreglo.reverse());

console.log(0 / 0);
let n1 = 0,
    n2 = 0;
if (isNaN(n1 / n2))
    alert('No es posible dividir entre 0');
else alert(n1 / n2);

console.log('--------------------------------');
n1 = 25423.1233512;
console.log(n1.toFixed(2));
console.log(n1.toFixed(10));
console.log(n1.toFixed());