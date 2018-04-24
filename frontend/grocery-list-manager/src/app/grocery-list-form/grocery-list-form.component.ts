import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {IGroceryList} from "../model/interface-grocery-list";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ADD_GROCERY_LIST} from "../actions";
import {GroceryListsService} from "../services/grocery-lists/grocery-lists.service";
import {Subscription} from "rxjs/Subscription";
import {GroceryList} from "../model/grocery-list";

@Component({
  selector: 'app-grocery-list-form',
  templateUrl: './grocery-list-form.component.html',
  styleUrls: ['./grocery-list-form.component.css']
})
export class GroceryListFormComponent implements OnInit, OnDestroy {

  @select() groceryList;
  groceryListModel: IGroceryList;

  groceryListFormControl: FormControl;

  private groceryListServiceSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private groceryListService: GroceryListsService) {
    this.groceryListModel = {
      _id: 0,
      name: "",
      groceryListItems: []
    };

    this.groceryListFormControl = new FormControl('', [
      Validators.required,
    ]);
  }

  ngOnInit() {
    this.groceryListServiceSubscription =
      this.groceryListService
        .getGroceryLists()
        .subscribe(
          data => {
            console.log(data);
            let groceryLists = data.body || [];

            for (let g of groceryLists) {
              this.ngRedux.dispatch({type: ADD_GROCERY_LIST, groceryList: g});
            }
          },
          error => {
            console.error('An error occured while retrieving your grocery lists : ', error);
          }
        )
  }

  ngOnDestroy() {
    if (this.groceryListServiceSubscription)
      this.groceryListServiceSubscription.unsubscribe();
  }

  /**
   * Called when the user has clicked on the create a new list
   * button
   */
  onSubmit() {
    this.groceryListServiceSubscription = this.groceryListService.postGroceryList(this.groceryListModel).subscribe(
      data => {
        this.ngRedux.dispatch({type: ADD_GROCERY_LIST, groceryList: data['obj']});
        console.log(data['obj'])
      },
      error => {
        console.error('An error occured while saving the grocery list : ', error);
      }
    );
  }
}
