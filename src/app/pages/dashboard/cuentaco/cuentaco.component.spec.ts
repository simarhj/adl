import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentacoComponent } from './cuentaco.component';

describe('CuentacoComponent', () => {
  let component: CuentacoComponent;
  let fixture: ComponentFixture<CuentacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentacoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
