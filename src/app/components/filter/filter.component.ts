import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  checkboxColor = {color: 'primary'};
  popular: boolean = false;

  @Output() onPopular: EventEmitter<boolean> = new EventEmitter();

  public toggle(event: MatCheckboxChange){
    this.onPopular.emit(event.checked);
  }





  // onPopularFilter(event: boolean): void {
  //   this.onPopular.emit(event);
  // }
  // isPopularStatus: boolean = false;
  // onPopularFilter(event: boolean): void {
  //   this.onPopular.emit(event);
  // }
  // public status = '';



}
