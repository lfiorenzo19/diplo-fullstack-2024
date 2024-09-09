/*
//     //Hola Mundo
console.log("Hola Mundo!");

// //Variables
var nombre = "Harry"; //antes se declaraban con var

console.log(nombre);

let nombreLet = "HarryLet"; // variable tipo string, ahora se declaran con let

console.log(nombreLet);

let edad = 10; // variable tipo numerica

console.log(edad);

//Constantes

const PI = 3.14; //reservamos en la memoria una variable constante que contiene el valor PI (no cambia)

console.log(PI);

// //Variable booleana
let tenerMascotas = true;

console.log(tenerMascotas);


/*ejercicio 1 :
imprimir tu nombre, apellido, edad, y si tenes mascotas */
/*
const nombre1 = "Leonardo";
const apellido1 = "Fiorenzo";
let edad1 = 21;
let tengoMascotas = true;

console.log("Ejercicio de Prueba:");
console.log("Como te llamas?",nombre1); //string
console.log("Como es tu apellido?",apellido1); //string
console.log("Cuantos años tenes?",edad1); //numérica
console.log("Tenes mascotas? = ",tengoMascotas); // booleana


// Operacioneds Basicas

let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;

console.log(numeroA + numeroB);
console.log(resultadoSuma);


let nombre = "Cosme";
let apellido = "Fulanito";
const ESPACIO = " ";

let nombreCompleto = nombre + ESPACIO + apellido;

console.log(nombreCompleto);

// Prompt, Consola y Alert

//Prompt 

let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada;
alert(salida);


let numero = parseInt(prompt("Ingrese su número"));
const NUMEROB = 30;

let salidaNumero = numero + NUMEROB;
alert(salidaNumero);



// Arrays
// Unidimensionales
let vector = [1265, 'Carlos', false, 'Perro', 46587];

console.log(vector.length);
console.log(vector[0]);
console.log(vector[1]);
console.log(vector[2]);
console.log(vector[3]);
console.log(vector[4]);


// Multidimensionales
let colorMascotas = [
    ['perro','marron','gris','rojo'],
    ['gato','blanco','negro'],
    ['pez','amarillo'],
    ['jirafa','naranja'],
];

console.log(colorMascotas[1][2]);
console.log(colorMascotas[1][1].length);


// Objeto utilizado como array asociativo
let persona = {
    nombre: "Juan",
    edad: 32,
    profesion: "Desarrollador",
};

console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["profesion"]);
*/

let empleados = [
    { nombre: "Juan", edad: 32, profesion: "Desarrollador" },
    { nombre: "Cosme", edad: 22, profesion: "Tester" },
    { nombre: "Pepito", edad: 42, profesion: "Frontend" }
    ];

    console.log(empleados[0].nombre,empleados[0].edad,empleados[0].profesion);
    console.log(empleados[1].nombre,empleados[1].edad,empleados[1].profesion);
    console.log(empleados[2].nombre,empleados[2].edad,empleados[2].profesion);


// Ejercicio 2: prompt

let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada + ", como estas?";
alert(salida);


let numero = parseInt(prompt("Ingrese un número")); //parseINT me ppermite trabajar con enteros, sino me concatena ya que los trata como strings como strings
const numReservado = 50;

let salidaNumero = numero * numReservado;
alert(salidaNumero);

let texto = prompt("Ingrese su texto");

let textoDos = prompt("Ingrese un texto diferente");

let salidaTexto = texto + " " + textoDos;

alert(salidaTexto);



