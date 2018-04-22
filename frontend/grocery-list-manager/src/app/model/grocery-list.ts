import {IGroceryList} from "./interface-grocery-list";
import {IGroceryListItem} from "./interface-grocery-list-item";

export class GroceryList implements IGroceryList{
  _id: number;
  name: string;
  groceryListItems: IGroceryListItem[];

  constructor(groceryList?: GroceryList) {
    if (groceryList) {
      this._id = groceryList._id;
      this.name = name;
      this.groceryListItems = groceryList.groceryListItems
    }
    else {
      this._id = 0;
      this.name = "New Grocery List " + this._id;
      this.groceryListItems = [];
    }
  }
}
