import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaEntidad } from '../entidades/persona.entidad';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-persona3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reg-persona3.component.html',
  styleUrls: ['./reg-persona3.component.css']
})
export class RegPersona3Component {

  public flagDisabled: boolean = false;
  public mensaje: string='';
  public profesion: string='';
  public direccion: string='';

  public personaList: PersonaEntidad[] = [
    {dni: '12345678', nombres:'Frank', apellidos: 'Rodriguez'},
    {dni: '22345678', nombres:'Luis', apellidos: 'Lee'},
    {dni: '32345678', nombres:'Laura', apellidos: 'Quintanilla'}

  ];

  public agregarPersona(){
    this.mensaje = "Agregando a una persona"
  }

  public setProfesion(event: Event){
    this.profesion = (<HTMLInputElement>event.target).value;
    console.log("Obteniendo la profesion", this.profesion)
  }



}
