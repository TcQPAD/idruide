import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListFormComponent } from './grocery-list-form.component';

describe('GroceryListFormComponent', () => {
  let component: GroceryListFormComponent;
  let fixture: ComponentFixture<GroceryListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
