import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Criteria } from "../../models/filters.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  checkboxColor = {color: 'primary'};
  popular: boolean = false;
  criteria: Criteria = {
    name: 'popular',
    status: false
  }

  //filtersConf: FilterConf

  @Output() onCriteria: EventEmitter<Criteria> = new EventEmitter();

  // @Output() onPopular: EventEmitter<boolean> = new EventEmitter();

  // private setCriteria() {
  //   this.criteria.status = this.popular;
  // }

  public toggle(event: MatCheckboxChange) {
    // this.onCriteria.emit(event.checked);
    // this.setCriteria();
    this.onCriteria.emit({...this.criteria, status:event.checked});
  }

  // public toggle(event: MatCheckboxChange) {
  //   this.onPopular.emit(event.checked);
  // }

}
