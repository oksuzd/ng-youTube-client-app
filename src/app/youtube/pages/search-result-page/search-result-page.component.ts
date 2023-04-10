import { Component } from '@angular/core';
import { SearchResultDataService } from "@youtube/services";
import { Criteria, Item } from "@youtube/models";

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultPageComponent {
  isShown: boolean = false;
  items: Item[] = [];
  hasText: boolean = false;
  criteria!: Criteria;

  private _items: Item[] = [];


  constructor(private searchResultService: SearchResultDataService,
              private filterService: SearchResultDataService) {
  }

  ngOnInit() {
    this._items = this.searchResultService.getData();
    this.createSubscriptionOnSearch();
    this.createSubscriptionOnFilter();
  }

  createSubscriptionOnSearch() {
    this.searchResultService.searchResultData$
      .subscribe(inputText => this.getItems(inputText))
  }

  createSubscriptionOnFilter() {
    this.filterService.filterIsShown$
      .subscribe(flag => this.isShown = flag)
  }

  getItems(inputText: string): void {
    const getConfiguredText = (text: string) => text.toLowerCase().trim();
    this.items = [];
    this._items.forEach(item => {
      if (getConfiguredText(item.title).includes(getConfiguredText(inputText))) {
        this.items.push(item)
      }
    });
  }

  onCriteria(event: Criteria): void {
    this.criteria = event;
  }
}
