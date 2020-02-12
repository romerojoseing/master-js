'use strict'

// EVentos en JS
// Es una funcion que se ejecuta cuando ocurre algo

// Eventos del Raton
/*
function alerta(){
    alert("Has presionado el Boton");
}
*/

window.addEventListener("load", () => {         // Posponer la carga de los scripts para esperar que el html cargue completo

    function cambiarColor(){
        console.log("Me has dado Click");
    
        var bg = boton.style.background;  
    
        console.log(boton.style.background);
    
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        
        return true;     
    }
    
    
    // Manera de hacer lo mismo pero separando al maximo el codigo con el CLick
    var boton = document.querySelector("#boton");
    
        boton.addEventListener("click", function(){
        cambiarColor();
        })
    
    
    // Mouse Over
        boton.addEventListener("mouseover", function(){
        boton.style.background = "#ccc"
        });
    
        boton.addEventListener("mouseout", function(){
        boton.style.background = "blue"
        });
    
    
    // Focus
    var input = document.querySelector("#nombre");
        input.addEventListener("focus", function(){
        console.log("[Focus] Estas dentro del Input");
        });
    
    // Blur
        input.addEventListener("blur", function(){
        console.log("[Blur] Estas fuera del Input");
        });
    
    // Keydown
        input.addEventListener("keydown", function(event){
        console.log("[Keydown] Estas pulsando la tecla: ", String.fromCharCode(event.keyCode));
        });
    
    // Keypress
        input.addEventListener("keypress", function(event){
        console.log("[Keypress] Presionaste la tecla: ", String.fromCharCode(event.keyCode));
        });
    
    // Keyup
        input.addEventListener("keyup", function(event){
        console.log("[Keypress] Soltaste la tecla: ", String.fromCharCode(event.keyCode));
        });

});

