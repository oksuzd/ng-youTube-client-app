import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from "../../../../services/search.service";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  inputValue: string = '';

  constructor(private searchService: SearchService) {
  }

  search(): void {
    // this.searchService.setInputValue(this.inputValue);
    this.onSearch.emit(this.inputValue);
  }
}
