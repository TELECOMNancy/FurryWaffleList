import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffleComponent } from './waffle.component';

describe('WaffleComponent', () => {
  let component: WaffleComponent;
  let fixture: ComponentFixture<WaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
