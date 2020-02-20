// Elementos que conforman un componente

import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[]
    public color: string;
    public mi_marca: string;

    constructor() {
        this.mi_marca = "Fila";
        this.color = "yellow";
        this.marcas = new Array;
        this.zapatillas = [
            new Zapatilla('Rebook Clasicc', 50, 'Rebook', 'Blanco', true),
            new Zapatilla('Nike Runner', 90, 'Nike', 'Negro', true),
            new Zapatilla('Rebook Clasicc', 80, 'Rebook', 'Blanco', true),
            new Zapatilla('Nike Runner', 40, 'Nike', 'Negro', true),
            new Zapatilla('Adidas Yezzy', 120, 'Adidas', 'Verde', false)
        ];
    }
    ngOnInit() {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {

            // Condicion para no mostrar las repetidas
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index) {
        this.marcas.splice(index, 1);
    }
}