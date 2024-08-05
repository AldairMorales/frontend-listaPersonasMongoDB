import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  constructor() { }
  procesar(){
    console.log("procesando");
  }
}
