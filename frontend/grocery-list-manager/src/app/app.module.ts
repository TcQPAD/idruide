import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryListRecapComponent } from './grocery-list-recap/grocery-list-recap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";
import {GroceryListDialogComponent} from "./grocery-list/dialog/grocery-list-dialog.component";


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
    MaterialModule
  ],
  providers: [],
  entryComponents: [GroceryListDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
