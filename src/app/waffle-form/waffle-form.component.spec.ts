import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffleFormComponent } from './waffle-form.component';

describe('WaffleFormComponent', () => {
  let component: WaffleFormComponent;
  let fixture: ComponentFixture<WaffleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaffleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaffleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
