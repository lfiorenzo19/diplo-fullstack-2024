/* Clase 15: Bucles en JS */
// let frutas = [
//     "Manzana",
//     "Limón",
//     "Frutilla",
//     "Pera",
//     "Mora",
//     "Kiwi",
//     "Sandia"
// ]

// console.log (frutas[0].length);
// console.log (frutas[1].length);
// console.log (frutas[2].length);
// console.log (frutas[3].length);
// console.log (frutas[4].length);
// console.log (frutas[5].length);
// console.log (frutas[6].length);


// While

// let valor = 0;

// while (valor <= 20){
//     console.log ("El valor de i = " + valor)
//     valor = valor + 1; //es lo mismo que i++
// }

// Decremento

// let numero = 10
// while (numero > 0){
//     document.write (" Te quedan  por caminar: ", numero, " pasos", "<br>");
//     numero = numero - 1;
// } if (numero == 1) {
//     document.write ("<br>","Te queda solo un paso por caminar!");
// } else {
//     document.write ("Ya no te quedan pasos por caminar!");
// }

// Do While

// let i = 0;
// do{
//     console.log("Valor de i: ", i);
//     i = i + 1;
// } while (i < 5);

// Ciclo For

// let a = 5;

// for (a = 0; a < 5; a++){
//     //Solicitar en cada repeticion un nombre
//     let ingresarNombre = prompt("Ingrese un nombre");
// //Informar el resultado

// alert("Turno nro " + a + " Nombre: " + ingresarNombre);

// }

// let frutas = [
//     "Manzana",
//     "Limón",
//     "Frutilla",
//     "Pera",
//     "Mora",
//     "Kiwi",
//     "Sandia"
// ]

// for (let i = 0; i <= frutas.length; i++){
//     let fruta = frutas[i];
//     console.log(fruta, ' tiene ', fruta.length, ' letras.');
// }

// ForEach

// let objetosMagicos = ["Varita", "Libro","Lechuza", "Caldero"];
// objetosMagicos.forEach(function(objetosMagicos, indice){
//     console.log("Objeto con forEach es: ", objetosMagicos, indice);
// })

// objetosMagicos.forEach((objetosMagicos,indice) => 
// console.log("Objeto con forEach, con funcion flecha, es: ", objetosMagicos, indice));


// Map
// objetosMagicos.map((objetosMagicos)=>{
//     console.log("Objeto con map: " + objetosMagicos)
// });

// const numeros = [1, 2, 3, 4, 5, 6, 10];
// const porDos = numeros.map ((x) => x * 2);
// const porCien = numeros.map ((x) => x * 100);

// console.log (numeros);
// console.log("Por dos ", porDos);
// console.log("Por cien ", porCien);

// Find
// const numeros = [1, 2, 3, 4, 5, 6, 10];
// const encontrado = numeros.find(elemento => elemento > 4);
// console.log(encontrado);

// const nombres = ["Harry","Ron","Hermione"];
// const nombreEncontrado = nombres.find(elemento => elemento === "Harry");
// console.log("El nombre encontrado es : ", nombreEncontrado);

// Filter

// const numeros = [1,2,3,4,5,6,10];
// const numMayoresCinco = numeros.filter((n)  => n >= 5);
// console.log(numMayoresCinco);


// const palabras = ["manzanas","bananas","uvas","frutillas","naranjas"];

// const palabraBuscada = "na";

// const palabrasClave = palabras.filter((palabra) => palabra.includes(palabraBuscada));

// console.log(palabrasClave);

/* 
El "Include" verifica si una subcadena o elemento esta presente en una cadena o en un array. En este caso, la usamos para corroborar que "na" esta presente en las palabras dentro del array.
*/

// Ejercicio1
const numeros = [15, 20, 35, 12, 87, 64, 14];
const numPar = numeros.map ((x) =>{
    if(x%2 == 0){
        console.log("El numero ",x, " es par");
    }else{
        console.log("El numero",x,"es impar");
    }
});


// Ejercicio2
const nombres = ["Juan", "Jerónimo","Pablo","Tomás","Gabriel"];
const nombresCortos = nombres.filter((n)  => n.length <= 5);
console.log(nombresCortos);



