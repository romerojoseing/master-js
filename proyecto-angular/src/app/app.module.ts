import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";          // Importar los Servicios
import { FormsModule } from "@angular/forms";                     // Importar el paquete Forms

import { routing, appRoutingProviders } from "./app.routing";     // Modulo de las Rutas

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routing,              // Agregamos el routing a los imports
    HttpClientModule,     // 
    FormsModule           //
  ],
  providers: [
    appRoutingProviders   // Agregamos a los Providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
