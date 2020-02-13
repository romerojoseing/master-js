'use strict'

// localStorage


// Comprobar si el LocalStorage esta Disponible
if(typeof(Storage) !== "undefined"){
    console.log("LocalStorage Disponible");
}else{
    console.log("LocalStorage Inconpatible");
}


// Guardar datos en el Navegador en el LocalStorage
localStorage.setItem("titulo", "Curso de Symfony de Romero Jose");

// Recuperar Elemento y Mostrarlo la Web
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


// Guardar un Objeto JSON
var usuario = {
    nombre: "Jose Romero",
    email: "romerojoseing@gmail.com",
    web: "romerojose.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));       // Para poder guardar objetos hay que usar el JSON.stringify

// Recuperar objeto y mostrarlo en la Web
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.nombre + " - " + userjs.web + " - " + userjs.email);

localStorage.removeItem("usuario");                             // Eliminar del LocalStorage
localStorage.clear();                                           // Eliminar todo el LocalStorage
