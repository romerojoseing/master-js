'use strict'

/*
    Que nos diga si un numero es par o impar
*/


var number = parseInt(prompt("Introduce el primer numero, ", 0));

while(number > 0 && isNaN(number)){
    var number = parseInt(prompt("Introduce el primer numero, ", 0));
}

if(number % 2 == 0){
    alert("par");
}else{
    alert("impar")
}
