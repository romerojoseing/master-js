import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";                     // Importar Modelo
import { ProjectService } from "../../services/project.service";    // Importar Servicio
import { UploadService } from "../../services/upload.service";
import { Global } from "../../services/global";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]               // Cargar Servicio
})

export class CreateComponent implements OnInit {
  // Propiedades del Modelo
  public title: string;
  public project: Project;
  public save_project;
  public status: string; 
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    // Propiedades del Servicio
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2019,'','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  // Recoger los valores enviados por el formulario
  onSubmit(form){
    // Guardar los datos en la BD
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          // Subir la Imagen 
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) => {

            this.save_project = response.project;
            this.status = 'success';
            form.reset();
          });
        }else{
          this.status = 'failed';
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
