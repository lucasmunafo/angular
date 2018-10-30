import { Component, OnInit } from '@angular/core';
import { Profesor } from './profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
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


  constructor(){
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
}

  ngOnInit(): void {
    console.log(this.profesor);
  }

  pulsarBoton(){
    console.log("Hemos pulsado el boton");
    this.admin=!this.admin;
    }
  }