import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  inputValue: string = '';

  search(): void {
    this.onSearch.emit(this.inputValue);
  }
}
