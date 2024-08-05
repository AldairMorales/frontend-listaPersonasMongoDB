import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonasComponent } from './listado-personas.component';

describe('ListadoPersonasComponent', () => {
  let component: ListadoPersonasComponent;
  let fixture: ComponentFixture<ListadoPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListadoPersonasComponent]
    });
    fixture = TestBed.createComponent(ListadoPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
