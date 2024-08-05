import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CalendarDemoComponent } from "./calendar-demo/calendar-demo.component";
import { PersonasComponent } from './personas/personas.component';
import { Personas2Component } from "./personas2/personas2.component";
import { RegPersonaComponent } from "./reg-persona/reg-persona.component";
import { RegPersona2Component } from "./reg-persona2/reg-persona2.component";
import { RegPersona3Component } from "./reg-persona3/reg-persona3.component";
import { RegPersona4Component } from "./reg-persona4/reg-persona4.component";
import { ListadoPersonasComponent } from "./listado-personas/listado-personas.component";
import { FormsModule } from '@angular/forms';
import { ListadoPersonasBindingComponent } from "./listado-personas-binding/listado-personas-binding.component";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [	
    AppComponent,
      PersonasComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarDemoComponent,
    Personas2Component,
    RegPersonaComponent,
    RegPersona2Component,
    RegPersona3Component,
    RegPersona4Component,
    ListadoPersonasComponent,
    FormsModule,
    ListadoPersonasBindingComponent,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
