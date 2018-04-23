import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {REMOVE_ALL_LISTS, REMOVE_GROCERY_LIST} from "../actions";

@Component({
  selector: 'app-grocery-list-recap',
  templateUrl: './grocery-list-recap.component.html',
  styleUrls: ['./grocery-list-recap.component.css']
})
export class GroceryListRecapComponent implements OnInit {

  @select() groceryList;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  removeAllLists() {
    this.ngRedux.dispatch({type: REMOVE_ALL_LISTS});
  }
}
