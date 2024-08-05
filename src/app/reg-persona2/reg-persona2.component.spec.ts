import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersona2Component } from './reg-persona2.component';

describe('RegPersona2Component', () => {
  let component: RegPersona2Component;
  let fixture: ComponentFixture<RegPersona2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegPersona2Component]
    });
    fixture = TestBed.createComponent(RegPersona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
