'use strict'

// Funciones Anónimas

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

// Callback
// Se le pasa como parametro a otra funcion
function sumame(n1, n2, sumaYmuestra, sumaPorDos){
    var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}
);

