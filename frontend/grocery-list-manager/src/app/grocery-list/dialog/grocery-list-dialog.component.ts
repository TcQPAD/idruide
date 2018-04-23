import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Component, Inject, Optional} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-grocery-list-dialog',
  templateUrl: './grocery-list-dialog.component.html',
})
export class GroceryListDialogComponent {

  formControl: FormControl;

  constructor(public dialogRef: MatDialogRef<GroceryListDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formControl = new FormControl('', [
      Validators.required,
    ]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
