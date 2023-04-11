import { Component } from '@angular/core';
import { SearchResultDataService } from '@youtube/services';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  inputValue: string = '';

  constructor(private searchResultService: SearchResultDataService) {}

  search(): void {
    this.searchResultService.setData(this.inputValue);
  }
}
