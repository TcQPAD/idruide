import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM, REMOVE_GROCERY_LIST} from "../actions";
import {IGroceryListItem} from "../model/interface-grocery-list-item";
import {MatDialog} from "@angular/material";
import {GroceryListDialogComponent} from "./dialog/grocery-list-dialog.component";
import {GroceryListItem} from "../model/grocery-list-item";
import {GroceryListsService} from "../services/grocery-lists/grocery-lists.service";
import {Subscription} from "rxjs/Subscription";
import {FormControl} from "@angular/forms";
import {GroceryListItemsService} from "../services/grocery-list-items/grocery-list-items.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit, OnDestroy {

  @select() groceryList;
  groceryListItem: IGroceryListItem;

  private groceryListServiceSubscription: Subscription;
  private groceryListItemServiceSubscription: Subscription;

  constructor(public dialog: MatDialog,
              private ngRedux: NgRedux<IAppState>,
              private groceryListService: GroceryListsService,
              private groceryListItemsService: GroceryListItemsService) {
    this.groceryListItem = new GroceryListItem({
      _id: 0,
      name: "New Item!"
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.performUnsubscribe();
  }

  private performUnsubscribe() {
    if (this.groceryListServiceSubscription)
      this.groceryListServiceSubscription.unsubscribe();

    if (this.groceryListItemServiceSubscription)
      this.groceryListItemServiceSubscription.unsubscribe();
  }

  /**
   * Called to remove a grocery list from the list of groceryLists
   * in the common state
   */
  removeGroceryList(_id: number) {
    this.groceryListServiceSubscription =
      this.groceryListService
        .deleteGroceryList(_id)
        .subscribe(
          data => {
            console.log(data);
            this.ngRedux.dispatch({type: REMOVE_GROCERY_LIST, _id: _id});
          },
          error => {
            console.error('Error while deleting grocery list : ', error);
          }
        );
  }

  addGroceryListItem(_id: number) {
    this.openDialog(_id);
  }

  removeGroceryListItem(parentId: number, childId: number) {
    console.log(childId);
    console.log(parentId);
    this.groceryListItemServiceSubscription =
      this.groceryListItemsService
        .removeGroceryListItem(parentId, childId)
        .subscribe(
          data => {
            console.log(data);
            this.ngRedux.dispatch({type: REMOVE_GROCERY_ITEM, o: {parent: parentId, child: childId}});
          },
          error => {
            console.error('Error deleting the given item from your list : ', error);
          }
        );
  }

  openDialog(_id: number): void {
    let newGroceryItem = new GroceryListItem();

    let dialogRef = this.dialog.open(GroceryListDialogComponent, {
      data: {item: newGroceryItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groceryListItem = new GroceryListItem(result);
        this.groceryListItemsService.addItemToList(_id, this.groceryListItem)
          .subscribe(
            data => {
              console.log(data);
              this.ngRedux.dispatch({type: ADD_GROCERY_ITEM, o: {item: this.groceryListItem, _id: _id}});
              },
            error => {
              console.error('Error while saving the new item : ', error);
            }
          );
      }
    });
  }
}
