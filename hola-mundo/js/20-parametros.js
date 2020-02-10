'use strict'

// Parametros REST y SPREAD


// Parametros de Tipo Rest o Resto de Parametros
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log("Resto de Frutas: ",...resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");


// Parametros Spread para separar los parametros y seguir el orden definido
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Manzana", "Sandia", "Pera", "Melon", "Coco");