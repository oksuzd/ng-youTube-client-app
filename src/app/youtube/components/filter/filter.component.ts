import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Criteria } from "@youtube/models";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  checkboxColor = {color: 'primary'};
  popular: boolean = false;
  isDate: boolean = false;
  isViews: boolean = false;
  isAlphabet: boolean = false;
  criteria: Criteria = {
    name: '',
    status: false
  }

  @Output() onCriteria: EventEmitter<Criteria> = new EventEmitter();

  public toggle(event: MatCheckboxChange) {
    this.onCriteria.emit({name: 'popular', status: event.checked});
  }

  public onDate(): void {
    this.isDate = !this.isDate;
    this.onCriteria.emit({name: 'date', status: this.isDate});
  }

  public onViews(): void {
    this.isViews = !this.isViews;
    this.onCriteria.emit({name: 'views', status: this.isViews});
  }

  public onAlphabet(): void {
    this.isAlphabet = !this.isAlphabet;
    this.onCriteria.emit({name: 'alphabet', status: this.isAlphabet});
  }
}
