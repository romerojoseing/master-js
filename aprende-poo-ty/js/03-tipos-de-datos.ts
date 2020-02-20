// String
let cadena: string = "romerojose.com";


// Number
let numero: number = 12;


// Boleano
let bolean: boolean = true;


// Any 
let cualquiera: any = "hola";
cualquiera = 10;


// Array
let lenguajes: Array<string> = ["PHP","JS","CSS"];
let lenguaje: Array<any> = ["PHP","JS","CSS",12];
let years: number[] = [12,13,14];
let year: any[] = ["hola",13,14];


// Varios tipos de datos
let otro: string | number = 12;
otro = "hola";


// Tipo de dato personalizado
type alfanumerico = string | number;
let plus: alfanumerico = 10;
plus = "plus";

// Let es en bloque y Var es a nivel globa

console.log(cadena, numero, bolean, cualquiera, lenguajes, lenguaje, years, year, otro, plus);
