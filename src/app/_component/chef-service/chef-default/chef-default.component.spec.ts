import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDefaultComponent } from './chef-default.component';

describe('ChefDefaultComponent', () => {
  let component: ChefDefaultComponent;
  let fixture: ComponentFixture<ChefDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
