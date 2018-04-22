import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryListRecapComponent } from './grocery-list-recap/grocery-list-recap.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryListRecapComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
