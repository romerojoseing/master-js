'use strict'

window.addEventListener("load", () => {


function intervalo(){
    var tiempo = setInterval(function(){                        // se Ejecuta Indefinidas Veces
        console.log("Se ejecuta");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            document.querySelector("h1").style.fontSize = "30px";
        }else{
            document.querySelector("h1").style.fontSize = "50px";
        }    
    }, 1000);
    
    return tiempo;

}

    // Timers
   var tiempo = intervalo();


    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado");
        clearInterval(tiempo);
    });


    
    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("Has iniciado");
        intervalo();
    });

    /*
    var tiempo = setTimeout(function(){                         // Se ejecuta solo 1 vez
        console.log("Se ejecuta");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            document.querySelector("h1").style.fontSize = "30px";
        }else{
            document.querySelector("h1").style.fontSize = "50px";
        }    
    }, 1000);*/

});