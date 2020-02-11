// Modo Estricto
'use strict'


// Let y Var

// Prueba con Var
var numero = 40;
console.log(numero);        // Valor 40

if(true){
    var numero = 50;
    console.log(numero);    // Valor 50 
}

console.log(numero);        // Valor 50


//Prueba con Let
let texto = "Curso de JS";
console.log(texto);        // Valor 1

if(true){
    let texto = "Curso de JS en If";
    console.log(texto);    // Valor 2
}

console.log(texto);        // Valor 1

// El let se limita al bloque de donde este asociado el comando (Var = Variable Global / Let = Variable Local)