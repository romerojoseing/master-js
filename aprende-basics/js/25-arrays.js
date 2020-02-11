'use strict'

// Arrays dentro de JS

var nombre = "Romero Jose";
var nombres = ["Romero Jose", "Olivares Cristian", "Robles Victor", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java");

var elemento = parseInt(prompt("Que elemento del array quieres?, 0 "));

if(elemento >= nombres.length){
    alert("Introduce un numero menor a: " +nombres.length);
}else{
    alert("Usuario Correcto: " +nombres[elemento]);
}

alert(nombres[elemento]);

console.log(nombres);
console.log(nombres[4]);
console.log(lenguajes);

document.write("<h1> Lenguajes de Programacion del 2018 </h1>");
document.write("<ul>");

// Recorrer Arreglos
/*
lenguajes.forEach((elemento)=>{
    document.write("<li> "+elemento+"</li>");
});

document.write("</ul>");


for(var i=0; i < lenguajes.length ; i++){
    document.write(" <li> " + lenguajes[i] +" </li>");
}
*/

for(let lenguaje in lenguajes){
    document.write(" <li> " + lenguajes[lenguaje] +" </li>");
}

// Busqueda en Array
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var precios = [10, 20, 50, 80, 100];

var busquedaa = lenguajes.find(lenguaje => lenguaje == "PHP");          // Buscar Palabra
var busquedaaa = lenguajes.findIndex(lenguaje => lenguaje == "PHP");    // Buscar Indice

var moneda = precios.some(precio => precio >= 20);    // Ver si el valor existe en el arreglo

console.log(busqueda);
console.log(busquedaa);
console.log(busquedaaa);

console.log(moneda);
