import {Component, OnInit, ViewChild} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ADD_GROCERY_ITEM, REMOVE_GROCERY_LIST} from "../actions";
import {IGroceryListItem} from "../model/interface-grocery-list-item";
import {MatDialog} from "@angular/material";
import {GroceryListDialogComponent} from "./dialog/grocery-list-dialog.component";
import {GroceryListItem} from "../model/grocery-list-item";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @select() groceryList;
  groceryListItem: IGroceryListItem;

  constructor(public dialog: MatDialog,
              private ngRedux: NgRedux<IAppState>) {
    this.groceryListItem = new GroceryListItem({
      _id: 0,
      name: "New Item!"
    });
  }

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
    this.openDialog(_id);
  }

  openDialog(_id: number): void {
    let newGroceryItem = new GroceryListItem();

    let dialogRef = this.dialog.open(GroceryListDialogComponent, {
      data: {item: newGroceryItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groceryListItem = new GroceryListItem(result);
        this.ngRedux.dispatch({type: ADD_GROCERY_ITEM, o: {item: this.groceryListItem, _id: _id}});
      }
    });
  }
}
