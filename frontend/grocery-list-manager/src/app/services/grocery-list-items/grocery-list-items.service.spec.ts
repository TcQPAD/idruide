import { TestBed, inject } from '@angular/core/testing';

import { GroceryListItemsService } from './grocery-list-items.service';

describe('GroceryListItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryListItemsService]
    });
  });

  it('should be created', inject([GroceryListItemsService], (service: GroceryListItemsService) => {
    expect(service).toBeTruthy();
  }));
});
