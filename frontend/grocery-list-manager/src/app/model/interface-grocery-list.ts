import {IGroceryListItem} from "./interface-grocery-list-item";

export interface IGroceryList {
  _id: number;
  name: string;
  groceryListItems: IGroceryListItem[];
}
