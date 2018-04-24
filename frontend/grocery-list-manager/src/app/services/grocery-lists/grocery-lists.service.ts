import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {GROCERY_LISTS_ENDPOINT} from "../../constants/endpoints/endpoints";
import {IGroceryList} from "../../model/interface-grocery-list";
import {Observable} from "rxjs/Observable";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {catchError} from "rxjs/operators";

@Injectable()
export class GroceryListsService {

  private url: string;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.url = GROCERY_LISTS_ENDPOINT;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }


  public getGroceryLists() : Observable<HttpResponse<IGroceryList[]>> {
    return this.http.get<IGroceryList[]>(this.url + 'get', {observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  public postGroceryList(groceryList: IGroceryList) : Observable<HttpResponse<{}>> {
    return this.http.post<{}>(this.url + 'post', {groceryList: groceryList}, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteGroceryList(groceryListId: number) : Observable<HttpResponse<{}>> {
    return this.http.request('DELETE', this.url + 'delete-list',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {_id: groceryListId}
      }
    )
      .pipe(catchError(this.handleError));
  }

  public deleteAllLists() : Observable<HttpResponse<{}>> {
    return this.http.delete(this.url + 'delete')
      .pipe(catchError(this.handleError));
  }

  /**
   * Source : https://angular.io/guide/http
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
