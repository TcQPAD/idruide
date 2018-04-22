import {IGroceryListItem} from "./interface-grocery-list-item";

export class GroceryListItem implements IGroceryListItem{
  _id: number;
  name: string;

  constructor(groceryListItem? : GroceryListItem) {
    if (groceryListItem) {
      this._id = groceryListItem._id;
      this.name = groceryListItem.name;
    }
    else {
      this._id = 0;
      this.name = "";
    }
  }
}
