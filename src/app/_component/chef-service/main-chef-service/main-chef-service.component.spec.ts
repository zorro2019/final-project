import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChefServiceComponent } from './main-chef-service.component';

describe('MainChefServiceComponent', () => {
  let component: MainChefServiceComponent;
  let fixture: ComponentFixture<MainChefServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChefServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
