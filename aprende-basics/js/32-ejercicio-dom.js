'use strict'

window.addEventListener("load", function(){
    console.log("Dom Cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("Evento submit listo");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es Valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es Valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        };

        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es Valido");
            document.querySelector("#error_apellido").innerHTML = "El apellido no es Valido";
            return false;
        }else{
            document.querySelector("#error_apellido").style.display = "none";
        };

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es Valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es Valida";
            return false;
        }else{
            document.querySelector("#error_edad").style.display = "none";
        };

        box_dashed.style.display = "block";

        console.log(nombre, apellido, edad);

        var datos = [nombre, apellido, edad];
        
        var p_nombre = document.querySelector("#p_nombre");
        var p_apellido = document.querySelector("#p_apellido");
        var p_edad = document.querySelector("#p_edad");

        p_nombre.innerHTML = nombre;    
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        
        /*
        for(var indice in datos){
            var parrafo = document.createElement("p");    
            parrafo.append(datos[indice]);
            box_dashed.append(parrafo);
        }
        */
        
    });

});