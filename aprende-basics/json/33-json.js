'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: "Batman",
    year: 2017,
    pais: "Estados Unidos"
};

var peliculas = [
    {
    titulo: "Iron Man",
    year: 2012,
    pais: "Estados Unidos"},
    {
    titulo: "Batman",
    year: 2017,
    pais: "Estados Unidos"},
    pelicula
];

pelicula.titulo = "Superman";

var caja_pelicula = document.querySelector("#peliculas");

for(var index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_pelicula.append(p);
}

console.log(pelicula);
console.log(peliculas);