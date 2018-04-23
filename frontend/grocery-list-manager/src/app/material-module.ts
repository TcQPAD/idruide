import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatInputModule, MatCardModule],
})
export class MaterialModule { }
