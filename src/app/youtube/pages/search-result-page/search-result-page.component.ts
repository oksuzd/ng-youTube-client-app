import { Component, OnInit } from '@angular/core';
import { SearchResultDataService } from '@youtube/services';
import { RenderedItem, } from '@youtube/models';
import { NgxSpinnerService } from "ngx-spinner";
import {
  catchError,
  combineLatest,
  debounceTime,
  filter,
  switchMap,
  tap,
  throwError
} from "rxjs";

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent implements OnInit {
  isShown: boolean = false;
  items: RenderedItem[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private searchParamsBarService: SearchResultDataService,
    private searchParamsService: SearchResultDataService,
    private searchResultService: SearchResultDataService,
  ) {
  }

  ngOnInit() {
    this.createSubscriptionOnSearchParamsBar();
    this.createSubscriptionOnSearch();
  }

  createSubscriptionOnSearchParamsBar() {
    this.searchParamsBarService.searchParamsIsShown$.subscribe(
      (flag) => (this.isShown = flag)
    );
  }

  createSubscriptionOnSearch() {

    combineLatest([this.searchParamsService.searchParamsData$, this.searchResultService.searchResultData$])
      .pipe(
        tap((res) => { this.items = !res[1] ? [] : this.items}),
        debounceTime(300),
        filter((res) => !!res[1]),
        switchMap(([params, query]) => {
          this.spinner.show().then();
          return this.searchResultService.getSearchResultData(query, params.maxResults, params.order)
        }),
        catchError((error) => {
          this.spinner.hide().then();
          return throwError(error);
        })
      )
      .subscribe(items => {
        this.items = items;
        this.spinner.hide().then();
      })
  }
}
