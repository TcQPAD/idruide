import {IGroceryListItem} from "./interface-grocery-list-item";

export interface IGroceryList {
  _id: number;
  groceryListItems: IGroceryListItem[];
}
