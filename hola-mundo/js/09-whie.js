'use strict'

// Bucle While 
var year = 2018;

while(year >= 1991){
    console.log("Estamos en el Año: " + year);

    if(year == 2000){
        break;              // para cortar un bucle
    }

    year --;
}

// Bucle Do While
var years = 20;

do{
    alert("Solo cuando sea diferente" + years);
    years++;
}while(years < 25);