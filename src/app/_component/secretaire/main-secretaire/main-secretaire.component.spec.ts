import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecretaireComponent } from './main-secretaire.component';

describe('MainSecretaireComponent', () => {
  let component: MainSecretaireComponent;
  let fixture: ComponentFixture<MainSecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
