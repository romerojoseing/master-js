'use strict'

// BOM - Browsec Object Model
// Como puedo trabajar con los elementos del navegador, tamaños de la ventana, redirigir a URLs y demas

// Ver que tamaño tiene la ventana

function getBom(){
console.log(window.innerWidth);         // Ventana Visible
console.log(window.innerHeight);
console.log(screen.width);              // Screen Ventana Total
console.log(screen.height); 
console.log(window.location);           // Direccion de Archivo
console.log(window.location.href);      // Direccion de URL
};

function redirect(url){                 // Redirigir a URL
    window.location.href = url;
}

function abrirVentana(url){             // Abrir nueva ventana
    window.open(url);
}

getBom();