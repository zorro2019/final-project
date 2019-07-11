import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinDefaultComponent } from './medecin-default.component';

describe('MedecinDefaultComponent', () => {
  let component: MedecinDefaultComponent;
  let fixture: ComponentFixture<MedecinDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
