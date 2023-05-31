import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent {

  constructor(public dialogRef: MatDialogRef<DialogWindowComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
