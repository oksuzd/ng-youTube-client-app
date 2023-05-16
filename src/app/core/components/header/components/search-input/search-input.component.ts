import { Component } from '@angular/core';
import { SearchResultDataService } from '@youtube/services';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  inputValue: string = '';

  constructor(private searchResultService: SearchResultDataService) {
  }

  buttonSearch(): void {
    this.searchResultService.setSearchTermData(this.inputValue);
  }

  liveSearch(event: string): void {
    if (event.length >= 3) {
      this.searchResultService.setSearchTermData(event);
    }
  }
}
