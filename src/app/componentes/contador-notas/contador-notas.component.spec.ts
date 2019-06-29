import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorNotasComponent } from './contador-notas.component';

describe('ContadorNotasComponent', () => {
  let component: ContadorNotasComponent;
  let fixture: ComponentFixture<ContadorNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
