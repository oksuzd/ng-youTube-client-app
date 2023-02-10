import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/search-item.model";
import { SearchResultDataService } from "./search-result.services/search-result-data.service";
import { SearchService } from "../../services/search.service";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  // items: Item[] = [];
  texts: string[] = ['456', 'zxc'];
  inputText: string = '';

  constructor(private dataService: SearchResultDataService,
              private searchInput: SearchService) {
  }

  ngOnInit(): void {
    // this.getItems();
    this.getText();
  }

  getText(): void {
    this.inputText = this.searchInput.getInputValue();
  }

  updateText() {
    this.texts.push(this.searchInput.getInputValue());
  }

  // getItems(): void {
  //
  //   this.items = this.dataService.getData().items.map(item => {
  //     return {
  //       title: item.snippet.title,
  //       imgUrl: item.snippet.thumbnails.medium.url,
  //       comments: +item.statistics.commentCount,
  //       dislikes: +item.statistics.dislikeCount,
  //       likes: +item.statistics.likeCount,
  //       views: +item.statistics.viewCount,
  //     }
  //   });
  // }

}
