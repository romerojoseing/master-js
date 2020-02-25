import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebook Clasicc', 50, 'Rebook', 'Blanco', true),
            new Zapatilla('Nike Runner', 90, 'Nike', 'Negro', true),
            new Zapatilla('Rebook Clasicc', 80, 'Rebook', 'Blanco', true),
            new Zapatilla('Nike Runner', 40, 'Nike', 'Negro', true),
            new Zapatilla('Adidas Yezzy', 120, 'Adidas', 'Verde', false)
        ];
    }

    getTexto(){
        return "Hola mundo";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
