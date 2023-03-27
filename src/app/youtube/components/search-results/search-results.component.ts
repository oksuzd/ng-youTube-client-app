import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Criteria, Item } from "@youtube/models";
import { SearchResultDataService } from "@youtube/services";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {

  @Input() message: string = '';
  @Input() isPopularStatus: boolean = false;
  @Input() criteria!: Criteria;

  items: Item[] = [];
  isFirstChange: boolean = true;

  constructor(private dataService: SearchResultDataService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const changeMessage = changes['message'];

    if (changeMessage) {
      this.items = [];
      if (!changeMessage.firstChange) {
        this.isFirstChange = changeMessage.firstChange;
      }
      if (this.message && !changeMessage.firstChange) {
        this.getItems(changeMessage.currentValue);
      }
    }
  }

  getItems(message: string): void {
    const getConfiguredText = (text: string) => text.toLowerCase().trim();
    this.items = this.dataService.getData();
    this.items = this.items.filter(item => getConfiguredText(item.title).includes(getConfiguredText(message)));
  }




}
