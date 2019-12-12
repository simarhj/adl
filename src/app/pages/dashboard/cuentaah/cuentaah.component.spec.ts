import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaahComponent } from './cuentaah.component';

describe('CuentaahComponent', () => {
  let component: CuentaahComponent;
  let fixture: ComponentFixture<CuentaahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
