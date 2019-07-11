import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMedecinComponent } from './main-medecin.component';

describe('MainMedecinComponent', () => {
  let component: MainMedecinComponent;
  let fixture: ComponentFixture<MainMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
