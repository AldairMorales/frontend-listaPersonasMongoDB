import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersona3Component } from './reg-persona3.component';

describe('RegPersona3Component', () => {
  let component: RegPersona3Component;
  let fixture: ComponentFixture<RegPersona3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegPersona3Component]
    });
    fixture = TestBed.createComponent(RegPersona3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
