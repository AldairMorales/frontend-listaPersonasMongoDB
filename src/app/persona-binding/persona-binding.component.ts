// Suggested code may be subject to a license. Learn more: ~LicenseLog:2456821627.
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona2Modelo } from '../modelo/persona2.modelo';
import { PersonasService } from '../service/personas.service';

@Component({
  selector: 'app-persona-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-binding.component.html',
  styleUrls: ['./persona-binding.component.css'],

})
export class PersonaBindingComponent implements OnInit {
  
  @Input() persona: Persona2Modelo;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }
  ngOnInit(): void {}

  public editarPersona(){
    console.log('Indice:', this.indice)
    //this.personasService.personaEditId.emit(this.indice);
  }

}
