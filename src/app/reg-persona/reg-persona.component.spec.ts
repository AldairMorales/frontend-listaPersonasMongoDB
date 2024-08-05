import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersonaComponent } from './reg-persona.component';

describe('RegPersonaComponent', () => {
  let component: RegPersonaComponent;
  let fixture: ComponentFixture<RegPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegPersonaComponent]
    });
    fixture = TestBed.createComponent(RegPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
