import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {IGroceryList} from "../model/interface-grocery-list";
import {ADD_GROCERY_LIST, REMOVE_GROCERY_LIST} from "../actions";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @select() groceryList;
  groceryListModel: IGroceryList;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.groceryListModel = {
      _id: 0,
      name: "",
      groceryListItems: []
    }
  }

  ngOnInit() {
  }

  /**
   * Called to remove a grocery list from the list of groceryLists
   * in the common state
   */
  removeGroceryList() {
    this.ngRedux.dispatch({type: REMOVE_GROCERY_LIST, groceryList: this.groceryListModel});
  }

  /**
   * Called when the user has clicked on the create a new list
   * button
   */
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_GROCERY_LIST, groceryList: this.groceryListModel});
  }
}
