import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';
import { MatDialogModule } from "@angular/material/dialog";

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  declarations: [BackButtonComponent, DialogWindowComponent],
  imports: [CommonModule, ...materialModules, FormsModule],
  exports: [...materialModules, FormsModule, BackButtonComponent],
})
export class SharedModule {}