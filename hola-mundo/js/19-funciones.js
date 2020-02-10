'use strict'

// Funciones
// Es una agrupacion reutilizable de un conjunto de isntrucciones

// Definir una Funcion

function porConsola(n1, n2){
    console.log("Suma: " + (n1+n2));
    console.log("Resta: " + (n1-n2));
    console.log("Multiplica: " + (n1*n2));
    console.log("Divide: " + (n1/n2));
    console.log("-----------------------------");
}

function porPantalla(n1, n2){
    document.write("Suma: " + (n1+n2) + "<br/>");
    document.write("Resta: " + (n1-n2) + "<br/>");
    document.write("Multiplica: " + (n1*n2) + "<br/>");
    document.write("Divide: " + (n1/n2) + "<br/>");
    document.write("-----------------------------" + "<br/>");
}

function calculadora(n1, n2, mostrar = true){
    if(mostrar==false){
        porConsola(n1, n2);
    }else{
        porPantalla(n1, n2);
    }
    return "Hola soy la calculadora";
}

// Invocar o llamar una funcion
//var resultado = calculadora();
//calculadora();

calculadora(1,6);
calculadora(1,7,false);


