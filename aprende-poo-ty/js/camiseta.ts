// Interface de Usuario
interface CamisetaBase{
    setColor(color);
    getColor();
}


// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta Estampada con el logo de: " + logo);
        }
    }
}

// Clases en TS (Molde del Objeto)

// Agregar el export para tenerlo en otro archivo
//@estampar('Prime')
class Camiseta implements CamisetaBase{

    // Propiedades (Caracteristicas del Objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    
    // Métodos (Funciones del Objeto)

    // Constructor para darle un valor a las propiedades de la clase
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    
    public getColor(){
        return this.color;
    }
}

// Clase Hija
class Sudadera extends Camiseta{
    public capucha: boolean;
    
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}


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