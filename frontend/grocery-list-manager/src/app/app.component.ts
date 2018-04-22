import { Component } from '@angular/core';
import {IAppState, INITIAL_STATE, rootReducer} from "./store";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
