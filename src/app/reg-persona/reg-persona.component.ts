import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reg-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reg-persona.component.html',
  styleUrls: ['./reg-persona.component.css']
})
export class RegPersonaComponent {

  public nombres: string;
  public apellidos: string;
  public dni: string;
  
  constructor(){
    this.nombres = "FRANK"
    this.apellidos = "RODRIGUEZ LEE"
    this.dni = "12345678"
  }

  ngOnInit(): void{}

}
