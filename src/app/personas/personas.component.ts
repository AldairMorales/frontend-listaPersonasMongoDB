import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
  // Si deseas hacer tus propios estilos y plantillas

  //template: '<h1>Listado de Personas</h1>',
  //styles:[
  //  'h1{color:red;}'
  //  ]
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
