import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  public color_seleccionado: string;

  constructor() { 
    this.color_seleccionado="green";
  }

  ngOnInit() {
  }

}
