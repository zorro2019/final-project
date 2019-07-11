import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireDefaultComponent } from './secretaire-default.component';

describe('SecretaireDefaultComponent', () => {
  let component: SecretaireDefaultComponent;
  let fixture: ComponentFixture<SecretaireDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaireDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaireDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
