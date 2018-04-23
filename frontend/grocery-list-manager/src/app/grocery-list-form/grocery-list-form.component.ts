import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {IGroceryList} from "../model/interface-grocery-list";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ADD_GROCERY_LIST} from "../actions";

@Component({
  selector: 'app-grocery-list-form',
  templateUrl: './grocery-list-form.component.html',
  styleUrls: ['./grocery-list-form.component.css']
})
export class GroceryListFormComponent implements OnInit {

  @select() groceryList;
  groceryListModel: IGroceryList;

  groceryListFormControl: FormControl;

  constructor(private ngRedux: NgRedux<IAppState>) {
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
  }

  /**
   * Called when the user has clicked on the create a new list
   * button
   */
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_GROCERY_LIST, groceryList: this.groceryListModel});
  }
}
