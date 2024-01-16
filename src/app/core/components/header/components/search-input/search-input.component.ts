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

  liveSearch(event: string): void {
    if (event.length >= 3 || !event) {
      this.searchResultService.setSearchTermData(event);
    }
  }
}
