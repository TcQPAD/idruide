import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GROCERY_LIST_ITEMS_ENDPOINT} from "../../constants/endpoints/endpoints";
import {IGroceryList} from "../../model/interface-grocery-list";
import {IGroceryListItem} from "../../model/interface-grocery-list-item";

@Injectable()
export class GroceryListItemsService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = GROCERY_LIST_ITEMS_ENDPOINT;
  }


  public addItemToList(list: IGroceryList, item: IGroceryListItem) {

  }
}
