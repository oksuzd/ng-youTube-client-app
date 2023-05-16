import { Component, OnInit } from '@angular/core';
import { SearchResultDataService } from '@youtube/services';
import { RenderedItem, } from '@youtube/models';
import { NgxSpinnerService } from "ngx-spinner";
import { debounceTime, delay, take } from "rxjs";

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
    this.searchParamsService.searchParamsData$
      .subscribe((params) => {
        this.searchResultService.searchResultData$
          .pipe(
            debounceTime(500),
          )
          .subscribe(query => {
            if (query) {
              this.spinner.show().then();
              this.searchResultService.getSearchResultData(query, params.maxResults, params.order)
                .pipe(take(1),
                  delay(200),
                )
                .subscribe(items => {
                  this.items = items;
                  this.spinner.hide().then();
                })
            }
          })
      })
  }
}
