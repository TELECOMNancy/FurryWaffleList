import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateListsComponent } from './private-lists.component';

describe('PrivateListsComponent', () => {
  let component: PrivateListsComponent;
  let fixture: ComponentFixture<PrivateListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
