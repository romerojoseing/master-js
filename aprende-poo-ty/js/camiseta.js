var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta Estampada con el logo de: " + logo);
        };
    };
}
// Clases en TS (Molde del Objeto)
// Agregar el export para tenerlo en otro archivo
//@estampar('Prime')
var Camiseta = /** @class */ (function () {
    // Métodos (Funciones del Objeto)
    // Constructor para darle un valor a las propiedades de la clase
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// Clase Hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("azul", "manga corta", "adidas", "L", 12);
console.log(camiseta);
//camiseta.estampacion();
var sudadera = new Sudadera("rojo", "manga larga", "nike", "L", 22);
sudadera.setCapucha(true);
sudadera.setColor("Verde");
console.log(sudadera);
// Llamados desde el constructor
/*
var camiseta = new Camiseta("rojo", "manga larga", "nike", "l", 10);
camiseta.setColor("Rojo");

var playera = new Camiseta("azul", "manga corta", "adidas", "l", 13);
playera.setColor("Azul");

console.log(camiseta, playera);
*/ 
