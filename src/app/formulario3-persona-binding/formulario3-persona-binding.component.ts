import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona2Modelo } from '../modelo/persona2.modelo';

@Component({
  selector: 'app-formulario3-persona-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario3-persona-binding.component.html',
  styleUrls: ['./formulario3-persona-binding.component.css']
})
export class Formulario3PersonaBindingComponent {
  @Output() personaCreada = new EventEmitter<Persona2Modelo>();
  @ViewChild('dniInput') dniInput: ElementRef;
  @ViewChild('nombresInput') nombresInput: ElementRef;
  @ViewChild('apellidosInput') apellidosInput: ElementRef;

    // Agregar valores por referencia
  public agregarPersona(){
    let persona = new Persona2Modelo();
    persona.dni = this.dniInput.nativeElement.value;
    persona.nombres = this.nombresInput.nativeElement.value;
    persona.apellidos = this.apellidosInput.nativeElement.value;
    this.dniInput.nativeElement.value = '';
    this.nombresInput.nativeElement.value = '';
    this.apellidosInput.nativeElement.value = '';
    this.personaCreada.emit(persona);
  }


}
