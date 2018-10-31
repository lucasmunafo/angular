import { Component, OnInit } from '@angular/core';
import { Profesor } from './profesor';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  providers: [PeticionesService]
})
export class ProfesorComponent implements OnInit {

    public nombre:string;
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any> = ['Profesor', 'Webdev', 'Barrendero'];

    //LLAMAMOS AL MODELO PROFESOR
    public profesor: Profesor;
    public profesorado: Array<Profesor>;
    public color:string;

    //PARA BOTON ADMIN
    public admin: boolean;

    //Para guardar el json

    public posts;

    //showcontent

    public content:boolean;


    //----------------------------CONSTRUCTOR----------------------------------
    //el primero que se ejecuta
  constructor(
    private _peticionesService:PeticionesService,
  ){
    this.nombre= 'Lucas';
    this.edad= 21;
    this.casado=false;
    this.trabajos=['Alumno','Webdev','bosques de palermo'];


    this.profesor  = new Profesor('Lucas',21,'Veterinario',true);
    this.profesorado = [
      this.profesor,
      new Profesor('Vanesa',41,'Historia',true),
      new Profesor('Roberto',21,'Matematica',true)
    ]

    this.color='red';

    this.admin=false;

    this.content=false;
}

  ngOnInit(): void {
    // console.log(this.profesor);
    this._peticionesService.getPost().subscribe(
      res => {
        this.posts=res;
        if(!this.posts)
          console.log("Respuesta Vacia de la API");
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  pulsarBoton(){
    console.log("Hemos pulsado el boton");
    this.admin=!this.admin;
    }

    showContent(){
      this.content=!this.content;
    }
  }