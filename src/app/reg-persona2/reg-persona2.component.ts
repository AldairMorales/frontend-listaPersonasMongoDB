import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reg-persona2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reg-persona2.component.html',
  styleUrls: ['./reg-persona2.component.css']
})
export class RegPersona2Component {
  
  public nombres: string;
  public apellidos: string;
  private dni: string;
  
  constructor(){
    this.nombres = "FRANK"
    this.apellidos = "RODRIGUEZ LEE"
    this.dni = "12345678"
  }

  public getDNI(): string{
    return this.dni;
  }

  ngOnInit(): void{}

}
