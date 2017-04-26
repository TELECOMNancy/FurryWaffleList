import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedListsComponent } from './shared-lists.component';

describe('SharedListsComponent', () => {
  let component: SharedListsComponent;
  let fixture: ComponentFixture<SharedListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
