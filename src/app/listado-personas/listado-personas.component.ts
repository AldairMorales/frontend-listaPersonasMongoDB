import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaModelo } from '../modelo/persona.modelo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {
  public titulo = 'Listado de Personas';
  // public personas: PersonaModelo[] = [
  //   {dni: '12345678', nombres:'Frank', apellidos: 'Rodriguez'},
  //   {dni: '22345678', nombres:'Luis', apellidos: 'Lee'},
  //   {dni: '32345678', nombres:'Laura', apellidos: 'Quintanilla'},
  //   {dni: '32345678', nombres:'Rafael', apellidos: 'Palacios'}
  // ];

  public personas: PersonaModelo[] = [];
  public persona: PersonaModelo = new PersonaModelo();

  // public dniInput: string='';
  // public nombresInput: string='';
  // public apellidosInput: string='';

  // public agregarPersona(){
  //   let persona = new PersonaModelo(this.dniInput, this.nombresInput, this.apellidosInput);
  //   this.personas.push(persona)
  //   this.dniInput = '';
  //   this.nombresInput = '';
  //   this.apellidosInput = '';
  // }

  public agregarPersona(){
    let item: PersonaModelo = Object.assign({}, this.persona);
    this.personas.push(item);
    this.persona.limpiar
  }

}
