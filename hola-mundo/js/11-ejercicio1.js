'use strict'

/*
Programa que pida dos numeros y que diga cual es el mayor, menor y si son iguales.
*/

var n1 = parseInt(prompt("Introduce el primer numero", 0));
var n2 = parseInt(prompt("Introduce el segundo numero", 0));

console.log(n1, n2);

while(n1 <= 0  || n2 <= 0 || isNaN(n1) || isNaN(n2)){
    var n1 = parseInt(prompt("Introduce el primer numero", 0));
    var n2 = parseInt(prompt("Introduce el segundo numero", 0))
}

if(n1 == n2){
    alert("los numeros son iguales");
}else if(n1 > n2){
    alert("N1 es mayor");
}else if(n1 < n2){
    alert("N2 es Mayor");
}
else{
    alert("Introduzca numeros Correctos");
}
