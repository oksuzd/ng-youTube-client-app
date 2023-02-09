import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/search-item.model";
import { SearchResultDataService } from "./search-result.services/search-result-data.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: SearchResultDataService) {
  }

  ngOnInit(): void {
    this.getItems();
    console.log(this.items)
  }

  getItems(): void {

    this.items = this.dataService.getData().items.map(item => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.medium.url,
        comments: +item.statistics.commentCount,
        dislikes: +item.statistics.dislikeCount,
        likes: +item.statistics.likeCount,
        views: +item.statistics.viewCount,
      }
    });
  }

}
