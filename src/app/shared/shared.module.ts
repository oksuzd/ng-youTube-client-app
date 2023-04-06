import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BackButtonComponent } from './components/back-button/back-button.component';


const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatCheckboxModule,
]

@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
  ],
  exports: [
    ...materialModules,
    FormsModule,
    BackButtonComponent,
  ],
})
export class SharedModule {
}
