'use strict'

/*
    Mostrar todos los numeros que se introducen en medio de dos numeros introducidos por el usuario
*/

var n1 = parseInt(prompt("Introduce numero1: ", 0));
var n2 = parseInt(prompt("Introduce numero2: ", 0));

document.write("De " + n1 + " a " + n2 + " estan estos numeros: <br/>")
for(var i = n1; i <= n2; i++){
    document.write(i+ "<br/>")
}