import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONtestComponent } from './jsontest.component';

describe('JSONtestComponent', () => {
  let component: JSONtestComponent;
  let fixture: ComponentFixture<JSONtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
