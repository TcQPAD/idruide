import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {GROCERY_LIST_ITEMS_ENDPOINT} from "../../constants/endpoints/endpoints";
import {IGroceryListItem} from "../../model/interface-grocery-list-item";
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GroceryListItemsService {
  private url: string;
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.url = GROCERY_LIST_ITEMS_ENDPOINT;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }


  public addItemToList(parentId: number, item: IGroceryListItem) {
    return this.http.post<{}>(
      this.url + 'post',
      {parent: parentId, groceryListItem: item},
      this.httpOptions
    )
      .pipe(catchError(this.handleError));
  }

  public removeGroceryListItem(parentId: number, childId: number) : Observable<HttpResponse<{}>> {
    return this.http.request('DELETE', this.url + 'delete',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {parent: parentId, _id: childId}
      }
    )
      .pipe(catchError(this.handleError));
  }

  /**
   * Source : https://angular.io/guide/http
   * todo factorize this as it will be given to every service
   * @param {HttpErrorResponse} error
   * @returns {ErrorObservable}
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
