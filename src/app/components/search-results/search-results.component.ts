import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from "../../models/search-item.model";
import { SearchResultDataService } from "./search-result.services/search-result-data.service";
import { SearchService } from "../../services/search.service";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {
  // items: Item[] = [];

  @Input() message: string = '';

  texts: string[] = [];
  inputText: string = '';

  constructor(private dataService: SearchResultDataService,
              private searchInput: SearchService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    const change = changes['message'];

    if(change && !change.firstChange){
      console.log('2', changes);
      this.updateText(change.currentValue);
    }
  }

  // ngOnInit(): void {
  //   // this.getItems();
  //   // this.getText();
  // }

  getText(): void {
    this.inputText = this.searchInput.getInputValue();
  }

  updateText(message: string) {
    //this.texts.push(this.searchInput.getInputValue());
    // this.texts.push(this.message);
    this.texts.push(this.filter(message));
  }

  filter(text: string): string {
    if (text.includes('1')) {
      return text;
    }
    return 'no results';
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
