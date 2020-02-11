'use strict'

// Plantillas de Texto 

var nombre = prompt("Mete tu Nombre:");
var apellidos = prompt("Mete tus Apellidos:");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
    `;

document.write(texto);