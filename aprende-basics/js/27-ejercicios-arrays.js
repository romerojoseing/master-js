'use strict'

/*
1 - Pida 6 numeros por pantalla y los meta en un array
2 - Mostrar el array entero (Todos sus elementos) en el cuerpo de a pagina y en la consola
3 - Ordenar el Array y mostrarlo
4 - Invertir el orden y mostrarlo
5 - Mostrar cuantos elementos tiene el array 
6 - Hacer una busqueda de un valor introducido por el usuario, y decir si esta en el array y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h2>Contenido del Array " + textoCustom + " </h2>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
    document.write("<li> "+ elemento + " </li>");
});
    document.write("</ul>")
}


// 1- Pedur numeros y meter en el Arreglo (2 Formas)

//var numeros = new Array(6);
var numeros = [];

for(var i = 0; i < 6; i++){
//  numeros[i] = parseInt(prompt("Introduce un Numero: ", 0));
    numeros.push(parseInt(prompt("Introduce un Numero: ", 0)));
}


// 2 - Mostrar el Array por consola y por pantalla

//Consola
console.log(numeros, "Numeros");

//Pantalla
mostrarArray(numeros, "Numeros");


// 3 - Ordenar el Array y Mostrarlo

//  numeros.sort();                             Ordenar Por letras
numeros.sort(function(a,b){return a-b});      //Ordenar Oor Numeros  
console.log(numeros, "Ordenados");
mostrarArray(numeros, "Ordenados");


// 4 - Invertir los numeros o elementos y mostrarlos
numeros.reverse();
console.log(numeros, "Revertidos");
mostrarArray(numeros, "Revertidos");


// 5 - Cuantos elementos tiene un Array
document.write("<h2> El array tiene " + numeros.length + " elementos </h2>");   


// 6 - Buscar un numero en el arreglo
var busqueda = parseInt(prompt("Buscar un Numero: ", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h2> Numero Encontrado </h2>");
    document.write("<h2> Posicion: " + posicion);
}else{
    document.write("<h2> Numero" + busqueda + " NO Encontrado </h2>");
}
