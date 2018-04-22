import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListRecapComponent } from './grocery-list-recap.component';

describe('GroceryListRecapComponent', () => {
  let component: GroceryListRecapComponent;
  let fixture: ComponentFixture<GroceryListRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
