// Importar necesarios para poder implementar los servicios
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Global } from "./global";

// Sevicio definido
@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "Probando el servicio de Angular";
    }

    // Guardar datos del Formulario en la base de datos
    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type','application/json');
        
        // URL Configurada en el fichero Global + Metodo de la API, Parametros o datos a guardar, Headers
        return this._http.post(this.url+'save-project', params, {headers: headers});           
    }


    // Recibir los Proyectos
    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'projects', {headers: headers});
    }

    // Mostar Proyectos en vista detallada
    getProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id, {headers: headers});
    }

    // Borrar Proyectos
    deleteProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'project/'+id, {headers: headers});
    }

    // Actualizar proyecto
    updateProject(project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'project/'+project._id, params, {headers: headers});
    }



}
