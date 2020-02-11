'use strict'

var edad = 22;
var imprime = "";

// Switch
switch(edad){
    case 18:
        imprime = "Acabas de Cumplir la Mayoria de Edad";
    break;

    case 25:
        imprime = "Ya eres un Adulto";
    break;

    case 40:
        imprime = "Crisis de los 40";
    break;

    case 70:
        imprime = "Eres un Anciano";
    break;

    default:
        imprime = "Tu edad es Neutral";
    break;
}

console.log(imprime);