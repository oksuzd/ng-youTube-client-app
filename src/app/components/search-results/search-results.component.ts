import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BarColor, Item } from "../../models/search-item.model";
import { SearchResultDataService } from "./search-result.services/search-result-data.service";
import moment from 'moment';
import { Criteria } from "../../models/filters.model";

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

    this.items = this.dataService.getData().items.map(item => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.medium.url,
        comments: +item.statistics.commentCount,
        dislikes: +item.statistics.dislikeCount,
        likes: +item.statistics.likeCount,
        views: +item.statistics.viewCount,
        publishedAt: item.snippet.publishedAt,
        dataBar: this.getDataBarColor(item.snippet.publishedAt),
      }
    });

    this.items = this.items.filter(item => getConfiguredText(item.title).includes(getConfiguredText(message)));
  }

  private getDataBarColor(date: string): BarColor {

    const daysAmount = moment(new Date()).diff(moment(date), 'days');
    const monthAmount = moment(new Date()).diff(moment(date), 'months');

    if (daysAmount <= 7 && monthAmount === 0) {
      return BarColor.blue;
    } else if (daysAmount > 7 && monthAmount === 0) {
      return BarColor.green;
    } else if (monthAmount >= 1 && monthAmount <= 6) {
      return BarColor.yellow;
    } else if (monthAmount > 6) {
      return BarColor.red;
    } else {
      return BarColor.default;
    }
  }
}
