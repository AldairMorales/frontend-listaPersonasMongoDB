import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona2Modelo } from '../modelo/persona2.modelo';

@Component({
  selector: 'app-formulario2-persona-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario2-persona-binding.component.html',
  styleUrls: ['./formulario2-persona-binding.component.css']
})


export class Formulario2PersonaBindingComponent {
  
  @Output() personaCreada = new EventEmitter<Persona2Modelo>();


  // Agregar valores por referencia
  public agregarPersona(dniInput: HTMLInputElement, nombresInput: HTMLInputElement, apellidosInput: HTMLInputElement){
    let persona = new Persona2Modelo();
    persona.dni = dniInput.value;
    persona.nombres = nombresInput.value;
    persona.apellidos = apellidosInput.value;
    dniInput.value = '';
    nombresInput.value = '';
    apellidosInput.value = '';
    this.personaCreada.emit(persona);
  }

}
