import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgReduxModule } from '@angular-redux/store';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryListRecapComponent } from './grocery-list-recap/grocery-list-recap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';
import {GroceryListDialogComponent} from "./grocery-list/dialog/grocery-list-dialog.component";
import {GroceryListsService} from "./services/grocery-lists/grocery-lists.service";
import {GroceryListItemsService} from "./services/grocery-list-items/grocery-list-items.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryListRecapComponent,
    GroceryListFormComponent,
    GroceryListDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    GroceryListsService,
    GroceryListItemsService
  ],
  entryComponents: [GroceryListDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
