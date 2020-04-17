/*---------------------------------------- ¿Que es JS? ----------------------------------------
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. 
*/

// Establecer usos o modos estrictos de JS
'use strict'                                        

// Mostrar mensajes pop-up de alerta
alert("Mensaje de Alerta");

// Mostrar mensaje por consola
console.log("Mensaje por Consola");

// Escribir dentro del HTML
document.write("Escribiendo en el HTML");


/*---------------------------------------- Variables en JS ----------------------------------------
Son etiquetas que van almacenar informacion.
var - permite definir variables de forma global (GLOBAL)
let - permite definir variables con alcance al bloque o funcion donde se esta utilizando (LOCAL)
const - permite definir variables de forma constante y que su valor no pueda ser modificado
*/
var nombre = "Jose";                    // Variable de tipo string o cadena de texto
var edad = 25;                          // Variable de tipo entero
var user = nombre + '' + edad;          // Variable de tipo compuesta

let lugar = "Valera";                   // Variable de tipo string declarado con let de forma local

const sexo = "masculino";               // Variable de tipo string declarado con const de forma constante


/*---------------------------------------- Operadores en JS ----------------------------------------
Son operadores matematicos para poder hacer operaciones entre variables o funciones
*/
var numero1 = 7;
var numero2 = 14;
var suma = numero1 + numero2;               // Operador suma
var resta = numero1 - numero2;              // Operador resta
var multiplicacion = numero1 * numero2;     // Operador multiplicacion
var division = numero1 / numero2;           // Operador division
var resto = numero1 % numero2;              // Operador resto para ver si es par o impar


/*---------------------------------------- Tipos de datos en JS ----------------------------------------
Tipos de datos en la cual se pueden expresar las variables
*/

var entero = 3;                 // Variable de tipo entero
var cadena = "Cadena";          // Variable de tipo cadena de texto o string
var boolean = true;             // Vatiable de tipo boolean - true o false - 0 o 1

var numero_falso = "33.5";

Number(numero_falso);           // Convertir Variables de String en numero Tanto enteros como Float
parseInt();                     // Convertir Variables de String en numero entero
parseFloat();                   // Convertir Variables de String en numero flotante

console.log(String());          // Convertir Variables de numeros a String

console.log(typeof entero);     // Retornar el Tipo de Dato que es cada variable
console.log(typeof cadena);
console.log(typeof boolean);


/*---------------------------------------- Condicionales en JS ----------------------------------------
Las condicionales son funciones que se tienen que cumplir para poder ejecutar un codigo interno correspondiente
*/

// Condicional If
// Si se cumple la condicion se ejecuta lo de dentro

/*
    Operadores Logicos              
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
    AND(Y): &&
    OR(O): ||
    Negacion: !
*/

var edad = 75;
var nombre = "David Suarez";

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años y es mayor de Edad");

    if (edad <= 33) {
        console.log("Todavia eres Milenial");
    } else if (edad >= 70) {
        console.log("Eres Anciano");
    } else {
        console.log("No eres Milenial");
    }
} else {
    console.log(nombre + " tiene " + edad + " años y es menor de Edad");
}

var year = 2018;

if (year != 2016) {                                     // Negación
    console.log("No estas en el 2016");
}

if (year >= 2000 && year <= 2020) {                     // AND
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

if (year == 2008 || year == 2018) {                     // OR
    console.log("El año acaba en 8");
} else {
    console.log("Año no Registrado");
}

// Condicional Switch
// Si se cumple alguna de las condiciones se ejecuta lo de dentro

var edad = 22;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de Cumplir la Mayoria de Edad";
    break;

    case 25:
        imprime = "Ya eres un Adulto";
    break;

    case 40:
        imprime = "Crisis de los 40";
    break;

    case 70:
        imprime = "Eres un Anciano";
    break;

    default:
        imprime = "Tu edad es Neutral";
    break;
}


/*---------------------------------------- Bucles en JS ---------------------------------------
Son funciones que van a tener ciclos que se van a repetetir un numero determinado de veces
*/

//---------- Bucle For ----------
// Estructura de Control que se repite las veces que el ciclo determine

var numero = 100;

for(var i = 1; i <= numero; i++){
    console.log("Este es el numero " + i);
}

//---------- Bucle While ----------
// Se repite el ciclo mientras que la condicion se este cumpliendo
var year = 2018;

while(year >= 1991){
    console.log("Estamos en el Año: " + year);

    if(year == 2000){
        break;              // para cortar un bucle
    }

    year --;
}

//---------- Bucle Do While ----------
// Este es parecido al while pero se va ejecutar primero el codigo y despues comprobar la condición
var years = 20;

do{
    console.log("Solo cuando sea diferente" + years);
    years++;
}while(years < 25);


/*---------------------------------------- Alertas y Popups en JS ----------------------------------------
Son ventanas y mensajes que se muestran para mostrar o recibir informacion 
*/

// Alerta
alert("Esta es una Alerta");

// Alerta de Conformacion
var resultado = confirm("¿Estas Seguro de querer continuar?");
console.log(resultado);

// Ingreso Datos
var edad = prompt("¿Que edad tienes?", 18);
console.log(edad);


/*---------------------------------------- Funciones en JS ----------------------------------------
Es una agrupacion reutilizable de un conjunto de isntrucciones, los parametros son los valores que se van
a ver involucrados en la ejecucion de la funcion. Los parametros opcionales son los que vienen inicializados
y no son obligarotios.
*/

function porConsola(n1, n2){
    console.log("Suma: " + (n1+n2));
    console.log("Resta: " + (n1-n2));
    console.log("Multiplica: " + (n1*n2));
    console.log("Divide: " + (n1/n2));
    console.log("-----------------------------");
}

function porPantalla(n1, n2){
    document.write("Suma: " + (n1+n2) + "<br/>");
    document.write("Resta: " + (n1-n2) + "<br/>");
    document.write("Multiplica: " + (n1*n2) + "<br/>");
    document.write("Divide: " + (n1/n2) + "<br/>");
    document.write("-----------------------------" + "<br/>");
}

// Funciones dentro de otra funcion
function calculadora(n1, n2, mostrar = true){
    if(mostrar==false){
        porConsola(n1, n2);
    }else{
        porPantalla(n1, n2);
    }
    return "Hola soy la calculadora";
}

// Invocar o llamar una funcion
calculadora(1,7,true);
calculadora(1,7,false);


//---------- Funciones Anónimas ----------
// Funcion que no tiene nombre y se puede guardar dentro de una variable

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}
console.log(pelicula);

//---------- Callback ----------
// Se ejecuta una funcion que se le pasa por parametros otra funcion
function sumame(n1, n2, sumaYmuestra, sumaPorDos){
    var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
// se le pasan los dos parametros n1 y n2 y luego se le pasan las dos funciones anónimas
sumame(5,7, (dato) => {                                     // Cualquiera de las dos formas es lo mismo "aqui se escribe menos"
                    console.log("La suma es: ",dato);}, 
            function(dato){
                    console.log("La suma por dos es: ", (dato*2));}
);


//---------- Funciones de Texto ----------

var numero = 444;
var texto1 = "Bienvenido al Curso de JS Bienvenido al Curso de JS";
var texto2 = "Es un curso muy bueno";


console.log(texto1.toUpperCase());          // Convertir en Mayusculas
console.log(texto2.toLowerCase());          // Convertir en minusculas

console.log(numero.toString());             // Convertir numero a String
console.log(typeof(numero.toString()));     // Convertir numero a String


// Calcular Longitud
var nombre = "Hola aqui todos";
var nombr = ["hola", "hola"];

console.log(nombre.length);
console.log(nombr.length);


// Concatenar - Unir Textos
var textoTotal = texto1 + " " + texto2;
var textTo = texto1.concat(" " + texto2)

console.log(textoTotal);
console.log(textTo);


// Busquedas en un Texto
var busqueda = texto1.indexOf("Curso");             // Primero Encontrado
var busquedas = texto1.lastIndexOf("Curso");        // Ultimo Encontrado
var busquedaso = texto1.search("Cursos");           // Primero "Como la palabra no esta sale -1" 
var busquedasos = texto1.match(/Curso/gi);          // todos los resultados
var busquedasoss = texto1.includes("JS");            // Ver si esta o no True o False

console.log(busqueda);
console.log(busquedas);
console.log(busquedaso);
console.log(busquedasos);
console.log(busquedasoss);


// Funciones para Reemplazar Texto
var busqued = texto1.replace("Curso", "Master");           // Reemplazar 
var busque = texto1.slice(13);                             // Cortar Texto hasta el lugar puesto o desde hasta (13,20)
var busqu = texto1.split(" ");                              // Agregar texto en un Array palabra a palabra 
var busq = texto1.trim();                                   // Quitar espacio por delante y por detras del texto

console.log(busqued);
console.log(busque);
console.log(busqu);
console.log(busq);


// Plantillas de Texto 

var nombre = prompt("Mete tu Nombre:");
var apellidos = prompt("Mete tus Apellidos:");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
    `;
document.write(texto);


/*---------------------------------------- Arreglos en JS ----------------------------------------
Son variables que almacenan una coleccion de valores los cuales pueden ser de las dimensiones que necesitemos
*/

//---------- Definir un Array ----------
var nombres = ["Romero Jose", "Olivares Cristian", "Robles Victor", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

var elemento = parseInt(prompt("Que elemento del array quieres?, 0 "));

if(elemento >= nombres.length){
    alert("Introduce un numero menor a: " +nombres.length);
}else{
    alert("Usuario Correcto: " +nombres[elemento]);
}

console.log(nombres);
console.log(nombres[4]);
console.log(lenguajes);

//---------- Recorrer un Array ----------
document.write("<h1> Lenguajes de Programacion del 2018 </h1>");
document.write("<ul>");

/*lenguajes.forEach((elemento)=>{
    document.write("<li> "+elemento+"</li>");
});*/

for(let lenguaje in lenguajes){
    document.write(" <li> " + lenguajes[lenguaje] +" </li>");
}

//---------- Busqueda en Array ----------
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var precios = [10, 20, 50, 80, 100];

var busquedaa = lenguajes.find(lenguaje => lenguaje == "PHP");          // Buscar Palabra
var busquedaaa = lenguajes.findIndex(lenguaje => lenguaje == "PHP");    // Buscar Indice

var moneda = precios.some(precio => precio >= 20);    // Ver si el valor existe en el arreglo

console.log(busqueda);
console.log(busquedaa);
console.log(busquedaaa);
console.log(moneda);

//---------- Arrays Multidimensionales ----------

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Fast", "Titanic", "Renacido", "Runner"]

peliculas.sort();                        // Ordenar Array aLfabeticamente

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);

// Agregar elemento a un Array
var elemento = "";

do{
    elemento = prompt("Introduce Pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

var camb = peliculas.pop();                 // Sacar el Ultimo elemento

var cambio = peliculas.join();              // Cambiar arrar a string separado por comas

var cadena = "texto 1, texto 2, texto3";;
var cadena_array = cadena.split(", ");      // Convertir String to Array

console.log(peliculas);
console.log(camb);
console.log(cambio);
console.log(cadena);
console.log(cadena_array);


/*---------------------------------------- DOM en JS ----------------------------------------
Document Object Model, que es donde podremos conectar con el HTML y modificarlos
*/

var div = document.getElementsByTagName("div");             // Seleccionar por etiqueta
var general = document.querySelector("div");

var caja = document.getElementById("caja");                 // Seleccionar por ID
var general = document.querySelector("#caja");

var clase = document.getElementsByClassName("clase");       // Seleccionar por clase
var general = document.querySelector(".clase");

caja.innerHTML = "Texto cambiado";                          // Cambiar texto a HTMl desde JS
caja.style.background = "blue";                             // Cambiar estios 


// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
var contenido = todosLosDivs[0].innerHTML;
var valor;

for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){                         // Comprobar si es string
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);                                                      //append Añade Antes - preprend Añade Despues
        //document.querySelector("#section").append(parrafo);
    }
}

console.log(contenido);
console.log(todosLosDivs);


// Conseguir todos los elementos por su clase
var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");

for(var div in divRojos || div in divAmarillos){
    if(divRojos[div].className == "rojo"){                  // Comprobar que es la misma clase
    divRojos[div].style.background = "red"; 
    }
}
console.log(divRojos);                                      // Mostrar contenido por consola
console.log(divAmarillos);                                  // Mostrar contenido por consola


// Query Selector No muestra los arreglos completos ( Es mejor usar el class name o para ids en concretos)
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);


/*---------------------------------------- BOM en JS ----------------------------------------
Browser Object Model, Como puedo trabajar con los elementos del navegador, tamaños de la ventana, redirigir a URLs y demas
*/

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


/*---------------------------------------- Eventos en JS ----------------------------------------
Son funciones que se ejecutan cuando ocurre algo.
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
        this.style.border = "10px solid black";
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

