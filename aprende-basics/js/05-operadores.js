'use strict'

// Operadores

var numero1 = 7;
var numero2 = 12;

var operacion = numero1 + numero2;
alert("El resultado es el siguiente: " + operacion)


// Tipos de Datos
// Entero String Decimal Booleano Array Objetos
var entero = 15;
var cadena = "Soy un Texto";
var boolean = true;     // true o false / 0 o 1

var numero_falso = "33.5";

Number();           // Convertir Variables de String en numero Tanto enteros como Float
parseInt();
parseFloat();

String();           // Convertir Variables de numeros a String

console.log(String(entero) + 1)  // Convertir Texto en Numero

console.log(typeof entero);         // Retornar el Tipo de Dato que es cada variable
console.log(typeof cadena);
console.log(typeof boolean);
console.log(typeof numero_falso);