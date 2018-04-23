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


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryListRecapComponent,
    GroceryListFormComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
