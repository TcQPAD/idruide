import { TestBed, inject } from '@angular/core/testing';

import { GroceryListsService } from './grocery-lists.service';

describe('GroceryListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryListsService]
    });
  });

  it('should be created', inject([GroceryListsService], (service: GroceryListsService) => {
    expect(service).toBeTruthy();
  }));
});
