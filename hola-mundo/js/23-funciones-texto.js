'use strict'

// Transformacion de Textos
var numero = 444;
var texto1 = "Bienvenido al Curso de JS Bienvenido al Curso de JS";
var texto2 = "Es un curso muy bueno";


console.log(texto1.toUpperCase());          // Convertir en Mayusculas
console.log(texto2.toLowerCase());          // Convertir en minusculas

console.log(numero.toString());             // Convertir numero s String
console.log(typeof(numero.toString()));     // Convertir numero s String


// Calcular Longitud
var nombre = "Hola aqui todos";
var nombr = ["hola", "hola"];

console.log(nombre.length);
console.log(nombr.length);


// Concatenar - Unir Textos
var textoTotal = texto1 + " " + texto2;
var textTo = texto1.concat(" " + texto2)

console.log(textoTotal);
console.log(textTo);


// Busquedas en un Texto
var busqueda = texto1.indexOf("Curso");             // Primero Encontrado
var busquedas = texto1.lastIndexOf("Curso");        // Ultimo Encontrado
var busquedaso = texto1.search("Cursos");           // Primero 
var busquedasos = texto1.match(/Curso/gi);          // todos los resultados
var busquedasoss = texto1.includes("JS");            // Ver si esta o no True o False

console.log(busqueda);
console.log(busquedas);
console.log(busquedaso);
console.log(busquedasos);
console.log(busquedasoss);


// Funciones para Reemplazar Texto
var busqued = texto1.replace("Curso", "Master");           // Reemplazar 
var busque = texto1.slice(13);                             // Cortar Texto hasta el lugar puesto o desde hasta (13,20)
var busqu = texto1.split(" ");                              // Agregar texto en un Array palabra a palabra
var busq = texto1.trim();                                   // Quitar espacio por delante y por detras del texto

console.log(busqued)
console.log(busque)
console.log(busqu)
console.log(busq)
