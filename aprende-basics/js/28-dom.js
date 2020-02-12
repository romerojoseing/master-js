'use strict'

// DOM - Document Object Model
// Editar Etiquetas ID Clases y demas contenido de la pagina

// Conseguir elementos con un ID en concreto
//var cajas = document.getElementById("caja");        // Obtener elemento desde HTML
var cajas = document.querySelector("#caja");

function cambiaColor(color){                        // Funcion para cambiar color desde JS
    cajas.style.background = color;
}

cajas.innerHTML = "Texto cambiado";                 // Cambiar texto a HTMl desde JS
cajas.style.background = "red";                     // Cambiar Estilos
cajas.style.color = "white";
cajas.style.padding = "20px";


// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var contenido = todosLosDivs[2].innerHTML;

var valor;

for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){     // Comprobar si es string
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);                                                      //append Añade Antes - preprend Añade Despues
        document.querySelector("#section").append(parrafo);
    }
}

console.log(contenido);

console.log(todosLosDivs);


// Conseguir todos los elementos por su clase
var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");

for(var div in divRojos || div in divAmarillos){
    if(divRojos[div].className == "rojo"){              // Comprobar que es la misma clase
    divRojos[div].style.background = "red"; 
    }
}
console.log(divRojos);                                 // Mostrar contenido por consola
console.log(divAmarillos);                                 // Mostrar contenido por consola


// Query Selector No muestra los arreglos completos ( Es mejor usar el class name o para ids en concretos)
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);