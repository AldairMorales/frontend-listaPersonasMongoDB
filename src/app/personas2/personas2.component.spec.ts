import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personas2Component } from './personas2.component';

describe('Personas2Component', () => {
  let component: Personas2Component;
  let fixture: ComponentFixture<Personas2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Personas2Component]
    });
    fixture = TestBed.createComponent(Personas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
