import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatListModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatDialogModule],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatDialogModule],
})
export class MaterialModule { }
