import {MatButtonModule, MatCardModule, MatInputModule, MatListModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCardModule, MatListModule],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatListModule],
})
export class MaterialModule { }
