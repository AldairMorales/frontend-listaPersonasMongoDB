import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersona4Component } from './reg-persona4.component';

describe('RegPersona4Component', () => {
  let component: RegPersona4Component;
  let fixture: ComponentFixture<RegPersona4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegPersona4Component]
    });
    fixture = TestBed.createComponent(RegPersona4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
