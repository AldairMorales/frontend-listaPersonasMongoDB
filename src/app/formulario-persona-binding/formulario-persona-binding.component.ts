import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona2Modelo } from '../modelo/persona2.modelo';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/logging.service';
import { PersonasService } from '../service/personas.service';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-formulario-persona-binding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './formulario-persona-binding.component.html',
  //styleUrls: ['./formulario-persona-binding.component.css'],
  providers: [LoginService]
})
export class FormularioPersonaBindingComponent implements OnInit {
  public persona: Persona2Modelo = new Persona2Modelo();
  public indice: number = -1;

  @Output() personaCreada = new EventEmitter<Persona2Modelo>();
  @ViewChild("dniInput") dniInput: ElementRef;
  @ViewChild("nombresInput") nombresInput: ElementRef;
  @ViewChild("apellidosInput") apellidosInput: ElementRef;
  @ViewChild("btnGrabar") btnGrabar: ElementRef;
  btnGuardarTexto:string = '+';
  indexUpdate:number = -1;


  constructor(private loginService: LoginService, private personasService: PersonasService){
    console.log("Constructor");
    //this.personasService.personaEditId.subscribe(
    //  (indice:number) => this.obtenerPersona(indice)
    //);
  }
  ngOnInit(): void {
  
  }

  public agregarPersona(){

    let item:Persona2Modelo = new Persona2Modelo();
    item.dni = this.dniInput.nativeElement.value;
    item.nombres = this.nombresInput.nativeElement.value;
    item.apellidos = this.apellidosInput.nativeElement.value;
    item.indice = this.indexUpdate;
    this.personaCreada.emit(item);
    this.dniInput.nativeElement.value = "";
    this.nombresInput.nativeElement.value = "";
    this.apellidosInput.nativeElement.value = "";
    this.indexUpdate = -1;
  }

  public obtenerPersona(indice:number){
    console.log('Capturando valores a editar')
    this.indexUpdate = indice;
    //let persona = this.personasService.personas[indice];
    //this.dniInput.nativeElement.value = persona.dni;
    //this.nombresInput.nativeElement.value = persona.nombres;
    //this.apellidosInput.nativeElement.value = persona.apellidos;
    //this,this.btnGuardarTexto = '+';
  }


}
