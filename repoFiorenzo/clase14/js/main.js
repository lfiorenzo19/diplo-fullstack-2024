/* Clase 14: Condicionales en JS */

//If else if else

// let numero = 15; // == compara los datos, === iguala estrictamente los datos, es decir si son iguales en cuanto a tipo y en cuanto a enunciado

// if (numero > 3) {
//     console.log("El número es mayor a 3")
// } else if (numero === 3){
//     console.log("El número es igual a 3")
// }
// else {
//     console.log("El número es menor a 3")
// };

// console.log ("Continua con la ejecucion");

// Operador condicional ternario
// Else resumido

// let edad = 16;
// let esMayorEdad;

// if (edad > 18){
//     esMayorEdad = true;
// } else {
//     esMayorEdad = false;
// }

// console.log ('¿Es mayor de edad?', esMayorEdad);

/* 
// Con Operador Ternario

// let edad = 20;
// let esMayorEdad;

let esMayorEdad = edad > 18 ? true : false; // Se evaluan dos posibilidades en una misma linea, para acortar el codigo (si tenes pocas cosas en el if)

console.log ('¿Es mayor de edad?', esMayorEdad);

let nombre = 'Cosme';

edad >= 18 
? console.log(nombre + " es mayor de edad")
: console.log(nombre , " no es mayor de edad");
*/

// Switch

// let powerRanger = "Black";
// switch (powerRanger){
//     case "Red":
//         console.log ("Red Ranger! Jason");
//         break;
//     case "Blue":
//         console.log ("Blue Ranger! Billy");
//         break;
//     case "Black":
//         console.log ("Black Ranger! Zack");
//         break;
//     case "Pink":
//         console.log ("Pink Ranger! Kinberly");
//         break;
//     case "Yellow":
//         console.log ("Yellow Ranger! Trini");
//         break;
//     default:
//         console.log ("No sos un Power Ranger")
// }

/*
let dia = new Date().getDay();
switch (dia){
    case 0:
        console.log("Hoy es Domingo");
        break;
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
        break;
    case 3:
        console.log("Hoy es Miercoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sábado");
        break;
    default:
        console.log("No equivale a ningun dia");
    }
*/

    let edad = prompt ("Por favor, ingresar su edad: ");

    if (edad !== null){
        edad = Number(edad); //lo pasamos a numero
        if(!isNaN(edad)){   //verificamos que sea un numero valido
        if (edad >= 18){
            document.write ("Sos mayor de edad ");
        } else{
            document.write ("Sos menor de edad ");
        }
    }else{
        document.write("Por favor ingrese un numero válido ");
    }
} else{
    document.write ("No agregaste ninguna edad");
}
