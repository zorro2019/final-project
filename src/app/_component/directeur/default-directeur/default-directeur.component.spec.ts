import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDirecteurComponent } from './default-directeur.component';

describe('DefaultDirecteurComponent', () => {
  let component: DefaultDirecteurComponent;
  let fixture: ComponentFixture<DefaultDirecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDirecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
