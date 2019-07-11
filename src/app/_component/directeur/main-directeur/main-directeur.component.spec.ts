import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDirecteurComponent } from './main-directeur.component';

describe('MainDirecteurComponent', () => {
  let component: MainDirecteurComponent;
  let fixture: ComponentFixture<MainDirecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDirecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
