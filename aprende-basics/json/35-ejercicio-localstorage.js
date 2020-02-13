'use strict'

// Agregar Peliculas
var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#pelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#list");

for(var index in localStorage){
    if(typeof localStorage[index] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
};


// Borrar Peliculas
var formulario = document.querySelector("#formulario_borrar");

formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#pelicula_borrar").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});