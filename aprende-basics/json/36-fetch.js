'use strict'

// Fetch (ajax) y periciones a servicios / apis rest
// JSONPlaceholder - Api rest es un servicio o backEnd que nos devuelve datos a peticiones mediante JSON (Datos de Prueba)

var usuarios_div = document.querySelector("#usuarios");
var janet_div = document.querySelector("#janet");
var info_div = document.querySelector("#info");

// Promesas

    getUsuarios()
    .then(data => data.json())                                  // Convertir un objeto que se recibe a JSON
    .then(user => {                                             // Guardar los valores en la variable
        listarUsuarios(user.data);        

        return getInfo();
    })
    .then((data) => {
        info_div.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        
        listarJanet(user.data);
    })
    .catch(error => {                               // consultar los errores de fetch en las Promesas
        console.log(error + " - Este error es proporcionado por la Funcion catch");
        alert("Error en las Peticiones");
    });


// Realizar Peticion de Usuarios
function getUsuarios(){
    return fetch("https://reqres.in/api/users");         // Realizar la Peticion
}

// Realizar una peticion de un usuario en especifico
function getJanet(){
    return fetch("https://reqres.in/api/users/2");              // Realizar la Peticion
}


// Listar Usuarios
function listarUsuarios(usuarios){
    usuarios.map((user, index) =>{
        let nombre = document.createElement("h3");
        nombre.innerHTML = index + ". " + user.first_name + " - " + user.last_name;
        usuarios_div.appendChild(nombre);
        document.querySelector(".loading").style.display = "none";
    });
}

// Listar Janet
function listarJanet(user){

    let nombre = document.createElement("h4");
    let avatar = document.createElement("img");

    nombre.innerHTML = user.first_name + " - " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";


    janet_div.appendChild(nombre);
    janet_div.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = "none";
}


function getInfo(){
 
    var profesor = {
        nombre: "Jose",
        apellido: "Romero",
        url: "romerojose.com"
    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        setTimeout(function(){
            if(typeof profesor_string != "string" || profesor_string == "") return reject("ERROR");

            return resolve(profesor_string);

        }, 2000);              
    });
}