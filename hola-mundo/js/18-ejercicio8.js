'use strict'

/*
    Calculadora
    - Pida dos numeros por pantalla
    - Si se mete uno mal que vuelva a pedir
    - Sumar, Restar, Multiplicar y Dividir esas Cifras
*/

var n1 = parseInt(prompt("Introduce el primer numero, ", 0));
var n2 = parseInt(prompt("Introduce el segundo numero, ", 0));

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
    var n1 = parseInt(prompt("Introduce el primer numero, ", 0));
    var n2 = parseInt(prompt("Introduce el segundo numero, ", 0));
}

var resultado = "La suma es: " + (n1+n2) + "<br/>" +
                "La resta es: " + (n1-n2) + "<br/>" +
                "La mutiplicacion es: " + (n1*n2) + "<br/>" +
                "La division es: " + (n1/n2) + "<br/>";

document.write(resultado);