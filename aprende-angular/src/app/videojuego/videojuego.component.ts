// Elementos que conforman un componente

import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de juegos populares";
    }
    
    ngOnInit(){
        //console.log("OnInit Ejecutado");
    }

    // Mostrar alerta de que los cambios se estan ejecutando
    ngDoCheck(){
        //console.log("DoCheck Ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy Ejecutado")   
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo";
    }

    
}
