alert("Hola Mundo :)");
console.log("Mensaje a la consola");
let variable = "A";

// Comentario de una línea
alert("línea de comentario");
/*bloque
de
comentario*/
alert("bloque de comentario");

// Tipos de variable
// Numéricas
let iva = 16;
console.log(iva);
let total = 235.34;
console.log(total);
// De texto
let t1 = "Con 'comillas simples'";
console.log(t1);
let t2 = 'Con "comillas dobles"';
console.log(t2);
t1 = "Con 'comillas simples'";
console.log(t1);
t2 = 'Con "comillas dobles"';
console.log(t2);

let dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
];
let diaSeleccionado = dias[3];
console.log(dias);

// Booleanos
let cliente = true;
console.log(cliente);

let visible = true;
alert(!visible); // Muestra "false" y no "true“
let cantidad = 0;
vacio = !cantidad; // vacio = true
cantidad = 2;
vacio = !cantidad; // vacio = false
let mensaje = "";

// Asignación, incremento y decremento
let num = 5;
console.log(num);
console.log(++num);
console.log(--num);
console.log(num++);
console.log(num);

// Flujo de control

let edad = 14;

if (edad < 3) alert("Bebe");
else if (edad < 12) alert("Niño");
else if (edad < 18) alert("Adolescente");
else if (edad < 60) alert("Adulto");
else alert("Adulto mayor");

// Bucles

for (let i = 0; i < 5; i++) {
    console.log(i + " " + "hola");
}

for (let i = 0; i < 7; i++) {
    console.log("dia " + dias[i]);
}
