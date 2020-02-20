import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprende-angular';
  public mostrar_videojuegos: boolean = true;

  constructor(){
    this.title = Configuracion.titulo;
  }

  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}
