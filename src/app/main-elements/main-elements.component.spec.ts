import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainElementsComponent } from './main-elements.component';

describe('MainElementsComponent', () => {
  let component: MainElementsComponent;
  let fixture: ComponentFixture<MainElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
