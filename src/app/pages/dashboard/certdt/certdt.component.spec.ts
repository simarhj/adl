import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertdtComponent } from './certdt.component';

describe('CertdtComponent', () => {
  let component: CertdtComponent;
  let fixture: ComponentFixture<CertdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
