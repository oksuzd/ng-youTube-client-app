import { Component } from '@angular/core';
import { SearchResultDataService } from '@youtube/services';
import { Criteria, DetailedItem } from '@youtube/models';
import { NgxSpinnerService } from "ngx-spinner";
import { debounce, debounceTime, delay, interval, tap } from "rxjs";

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  isShown: boolean = false;
  items: DetailedItem[] = [];
  // hasText: boolean = false;
  criteria!: Criteria;

  private _items: DetailedItem[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private searchResultService: SearchResultDataService,
    private filterService: SearchResultDataService
  ) {
  }

  ngOnInit() {
    this.spinner.show().then();


    // this._items = this.searchResultService.getData();
    this.searchResultService.getData()
      .pipe(
        delay(300),
        tap(res => console.log('res: ', res))
      )
      .subscribe(res => {
        this._items = res
        this.createSubscriptionOnSearch();
        this.createSubscriptionOnFilter();
        this.spinner.hide().then()
      })
  }

  createSubscriptionOnSearch() {
    this.searchResultService.searchResultData$.subscribe((inputText) =>
      this.getItems(inputText)
    );
  }

  createSubscriptionOnFilter() {
    this.filterService.filterIsShown$.subscribe(
      (flag) => (this.isShown = flag)
    );
  }

  getItems(inputText: string): void {
    const getConfiguredText = (text: string) => text.toLowerCase().trim();
    this.items = [];
    this._items.forEach((item) => {
      if (
        getConfiguredText(item.title).includes(getConfiguredText(inputText))
      ) {
        this.items.push(item);
      }
    });
  }

  onCriteria(event: Criteria): void {
    this.criteria = event;
  }
}
