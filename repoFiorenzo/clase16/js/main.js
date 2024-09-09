/* Clase 16: Funciones JS */


// saludar("Cosme", "Fulanito", 5);
// saludar("Cino", "Crossbow", 15);
// saludar("Meo", "Mife", 25);


// function saludar(nombre, apellido, edad){
//     console.log ("Hola", nombre, apellido, "tu edad es",edad);
// }

/* Declaracion de la funcion, con los parametros */

// function sumar(num1, num2){
//     return num1 + num2;
// }

/* LLamada de la funcion con los argumentos */

// sumar(5,6);

// console.log(sumar(5,8));

/* Otra forma */

// let resultado = sumar(9,12);
// console.log(resultado);

/* Funciones Anonimas */

/*Son anonimas xq no se les pasa un 
nombre cuando declaramos la funcion completa*/

// let suma = function(num1, num2){
//     return num1 + num2;
// }

// let resultado = suma(12,10);
// console.log(resultado);

/* se llama a la funcion por la variable, ya que no tenemos
el nombre de la funcion */



/* Ejercicio de clase */

/* saludo("Leonardo","Fiorenzo", "Games Of Thrones"); // llamo la funcion

function saludo(nombre, apellido, serieFav){
    console.log("Un gusto", nombre, apellido, "tu serie", serieFav
        , "es muy buena");
} // declaro la funcion

// LO HACEMOS CON RETURN QUE ASI SE HACE SIEMPRE

function saludar(nom, apel, serFav){
    return ("Hola " + nom + " " + apel + " tu serie fav es " + serFav);
}

// En consola
console.log(saludar("Leonardo", "Fiorenzo", "Games Of Thrones"));

// En la pag
document.write(saludar("Leonardo", "Fiorenzo", "Games Of Thrones"));
*/


/* 2do Ejercicio de Clase */


/*
function largoNombre (nombre){
    return ("El nombre ingresado es: " + nombre + " " + "y tiene"
        + " " + nombre.length + " " + "letras");
}

console.log(largoNombre("Leonardo"));
*/

/* Funcion Scope */
/*
function multiplicar(num1, num2){
    const num3= 10;
    return (num1 + num2) * num3;
}

let resultado = multiplicar (10, 2);
console.log(resultado);
*/

/* Funciones Flecha */

// Es una funcion anonima, pero con sintaxis simplificada
/* Usamos (Flecha) => entre los 
parametros y el bloque, reemplazamos la palabra "function" */

/*
const suma = (a, b) => {retunr a + b};

// Si es una funcion de una sola linea con retorno, podemos evitar escribit el bloque "{}"

const resta = (a, b) => a - b;
    suma(12,25);
    resta(11,5);
*/

/* Ejemplo para calcular el precio */

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;

// /* si es una fun en 1 sola linea, con retorno y parametro,
// se puede evitar escribir el "()" y el "{}" */

//const iva = x =>  x * 0.21;
// let precioProducto = 500;
// let precioDescuento = 50;

// // Calculo el precioProducto + IVA - precioDescuento

// let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)), precioDescuento);

// console.log (nuevoPrecio);


/* Ejercicio Practica: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de una aplicación. A partir de los ejemplos mostrados, deberás.
Armar la estructura HTML.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.

Ejemplo:
Calcular el costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular la edad promedio de las personas registradas.
Calcular la nota final de alumnos ingresados.
*/

let edad = 0;
let vectorEdad = [];
let sumarEdad = 0;
let promedio = (a,b) => a/b



for(let i = 0; i < 5; i++){
    edad = parseInt(prompt("Ingrese su edad"));
    if(edad!==null){
        edad = Number(edad);
        if(!isNaN(edad)){
            vectorEdad = [edad];
            alert("Tu edad " + edad + " fue cargada correctamente");
        }else{
            alert("Ingrese un digito correcto para la edad")
        }
    }else{
        alert("No ingresaste ninguna edad");
    }
    document.write(vectorEdad, " ");
}

sumarEdad = vectorEdad.map((x)=>{
    const suma = x + x + x + x + x;
    return suma;
})

document.write(sumarEdad);

// promedio(sumarEdad, vectorEdad.length);
// document.write(promedio);