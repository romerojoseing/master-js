'use strict'

/*
    Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("Introduzca el numero:", 0));

document.write("<h1>La tabla del: " + numero + "</h1>");
for(var i=1; i<=10; i++){
    document.write(i+ " x " +numero+ " = " + (i*numero) + " <br/>");
}

// Todas las Tablas
for(var c=1; c<=10; c++){
    document.write("<h1>La tabla del: " + c + "</h1>");
    for(var i=1; i<=10; i++){
        document.write(i+ " x " +c+ " = " + (i*c) + " <br/>");
    }
}