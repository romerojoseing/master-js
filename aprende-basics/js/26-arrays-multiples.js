'use strict'

// Arrays dentro de otros arrays



var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Fast", "Titanic", "Renacido", "Runner"]

peliculas.sort();           // Ordenar Array aLfabeticamente

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);
/*
// Agregar elemento a un Array
var elemento = "";

do{
    elemento = prompt("Introduce Pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();                // Sacar el Ultimo elemento
*/
var cambio = peliculas.join();  // Cambiar arrar a string separado por comas

var cadena = "texto 1, texto 2, texto3";;
var cadena_array = cadena.split(", ");      // Convertir String to Array

console.log(peliculas);
console.log(cambio);
console.log(cadena);
console.log(cadena_array);
