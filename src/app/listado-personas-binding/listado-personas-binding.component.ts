import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaBindingComponent } from "../persona-binding/persona-binding.component";
import { Persona2Modelo } from '../modelo/persona2.modelo';
import { PersonaModelo } from '../modelo/persona.modelo';
import { FormularioPersonaBindingComponent } from "../formulario-persona-binding/formulario-persona-binding.component";
import { LoginService } from '../service/logging.service';
import { AyudaService } from '../service/ayuda.service';
import { PersonasService } from '../service/personas.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-listado-personas-binding',
  standalone: true,
  imports: [CommonModule, PersonaBindingComponent, FormularioPersonaBindingComponent, FormsModule, ButtonModule],
  templateUrl: './listado-personas-binding.component.html',
  styleUrls: ['./listado-personas-binding.component.css'],
  providers: [LoginService, AyudaService, PersonasService]
})
export class ListadoPersonasBindingComponent implements OnInit{
  constructor(private personasService: PersonasService){}
  public personas: Persona2Modelo[] = [];
  public newPersona: any = {};
  public editarPersona: any = {};

  ngOnInit(): void {
    this.loadPersons();
  }
  
  loadPersons(): void {
    this.personasService.getPersons().subscribe((data) => {
      this.personas = data;
    });
  }
  
  deletePerson(id: string): void {
    this.personasService.deletePerson(id).subscribe(() => {
      this.loadPersons();
    });
  }

  createPerson(form: NgForm) {
    this.personasService.createPerson(this.newPersona).subscribe(() => {
      this.loadPersons();
      form.resetForm();
      this.newPersona = new Persona2Modelo;
    });
  }
  
  setEditingPerson(person: any) {
    this.editarPersona = { ...person }; // Crear una copia para editar
  }
  
  updatePerson() {
    if (this.editarPersona) {
      this.personasService.updatePerson(this.editarPersona._id, this.editarPersona).subscribe(() => {
        this.loadPersons();
        this.editarPersona = new Persona2Modelo;
      });
    }
  }

  cancelEditing() {
    this.editarPersona = new Persona2Modelo;
  }

}
