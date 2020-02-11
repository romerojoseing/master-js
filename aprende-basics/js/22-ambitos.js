'use strict'

// Ambitos de las Variables
// pueden ser tanto variables locales y globales dependiendo de que funcion la almacenen

function holaMundo(texto){
    var hola_mundo = "Dentro de Funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";

holaMundo(texto);

console.log(hola_mundo);