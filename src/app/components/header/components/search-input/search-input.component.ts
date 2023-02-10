import { Component } from '@angular/core';
import { SearchService } from "../../../../services/search.service";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  inputValue: string = '';

  constructor(private searchService: SearchService) {
  }

  search(): void {
    this.searchService.setInputValue(this.inputValue);
  }
}
