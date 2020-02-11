'use strict'

// Condicionales 

// Condicional If
// Si se cumple la condicion se ejecuta lo de dentro

var edad1 = 10;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad1 es Mayor que Edad2");
}
else{
    console.log("La Edad1 es inferior");
}

/*
    Operadores Logicos
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

var edad = 75;
var nombre = "David Suarez";

if(edad >= 18){
    console.log(nombre + " tiene " + edad + " años y es mayor de Edad");

    if(edad <= 33){
        console.log("Todavia eres Milenial");
    }
    else if(edad >= 70){
        console.log("Eres Anciano");
    }
    else{
        console.log("No eres Milenial");
    }
}
else{
    console.log(nombre + " tiene " + edad + " años y es menor de Edad");
}

/*
    Operadores
    AND(Y): &&
    OR(O): ||
    Negacion: !
*/

var year = 2018;

// Negación
if(year != 2016){
    console.log("No estas en el 2016");
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no Registrado");
}