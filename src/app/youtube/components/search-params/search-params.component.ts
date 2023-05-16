import { Component, OnInit } from '@angular/core';
import { SearchResultDataService } from "@youtube/services";
import { OrderParam, SearchParams } from "@youtube/models";
import { MatRadioChange } from "@angular/material/radio";

interface DropOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent implements OnInit {
  dropOptions: DropOptions[] = [
    {value: '10', viewValue: '10'},
    {value: '20', viewValue: '20'},
    {value: '30', viewValue: '30'},
    {value: '40', viewValue: '40'},
    {value: '50', viewValue: '50'},
  ];

  searchResultsOrder: OrderParam[] = Object.values(OrderParam);
  searchParams: SearchParams = {
    order: OrderParam.Relevance,
    maxResults: ''
  }

  constructor(private searchParamsData: SearchResultDataService) {
  }

  ngOnInit() {
    console.log('this.searchParams', this.searchParams);
    this.searchParamsData.searchParamsData$
      .subscribe(params => this.searchParams = params);
  }

  onMaxResultsChange(event: string) {
    this.searchParamsData.setSearchParamsData({maxResults: event})
  }

  onOrderChange(event: MatRadioChange) {
    this.searchParamsData.setSearchParamsData({order: event.value})
  }
}
