import {Component, OnInit, ViewChild} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {IGroceryList} from "../model/interface-grocery-list";
import {ADD_GROCERY_ITEM, ADD_GROCERY_LIST, REMOVE_GROCERY_LIST} from "../actions";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {IGroceryListItem} from "../model/interface-grocery-list-item";
import {GroceryListItem} from "../model/grocery-list-item";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @select() groceryList;
  groceryListItem: IGroceryListItem;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  /**
   * Called to remove a grocery list from the list of groceryLists
   * in the common state
   */
  removeGroceryList(_id: number) {
    this.ngRedux.dispatch({type: REMOVE_GROCERY_LIST, _id: _id});
  }

  addGroceryListItem(_id: number) {
    this.groceryListItem = new GroceryListItem();
    this.groceryListItem._id = 1;
    this.groceryListItem.name = "An item!";
    this.ngRedux.dispatch({type: ADD_GROCERY_ITEM, o: {item: this.groceryListItem, parent: _id}})
  }
}
