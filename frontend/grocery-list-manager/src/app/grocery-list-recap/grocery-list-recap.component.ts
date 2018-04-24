import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {REMOVE_ALL_LISTS, REMOVE_GROCERY_LIST} from "../actions";
import {Subscription} from "rxjs/Subscription";
import {GroceryListsService} from "../services/grocery-lists/grocery-lists.service";

@Component({
  selector: 'app-grocery-list-recap',
  templateUrl: './grocery-list-recap.component.html',
  styleUrls: ['./grocery-list-recap.component.css']
})
export class GroceryListRecapComponent implements OnInit, OnDestroy {

  @select() groceryList;
  @select() lastUpdate;

  private groceryListServiceSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private groceryListService: GroceryListsService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.performUnsubscribe();
  }

  private performUnsubscribe() {
    if (this.groceryListServiceSubscription)
      this.groceryListServiceSubscription.unsubscribe();
  }

  removeAllLists() {
    this.performUnsubscribe();

    this.groceryListServiceSubscription =
      this.groceryListService
        .deleteAllLists()
        .subscribe(
          data => {
            console.log(data);
            this.ngRedux.dispatch({type: REMOVE_ALL_LISTS});
          },
          error => {
            console.error('Error while deleting every lists : ', error);
          }
        );
  }
}
