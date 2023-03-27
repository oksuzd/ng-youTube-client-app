import { Injectable } from '@angular/core';
import { BarColor, Item, Response } from "@youtube/models";
import { RESPONSE_DATA } from "@youtube/services/mock-data";
import moment from "moment/moment";


@Injectable({
  providedIn: 'root'
})
export class SearchResultDataService {

  constructor() {
  }

  getData(): Item[] {
    return this.mapData(RESPONSE_DATA);
  }

  getItemById(id: string): Item | undefined {
    return this.mapData(RESPONSE_DATA, true).find(item => item.id === id)
  }

  private mapData(data: Response, isDetailed: boolean=false): Item[] {
    return data.items.map(item => {
      return {
        id: item.id,
        title: item.snippet.title,
        imgUrl: isDetailed ? item.snippet.thumbnails.maxres.url : item.snippet.thumbnails.medium.url,
        comments: +item.statistics.commentCount,
        dislikes: +item.statistics.dislikeCount,
        likes: +item.statistics.likeCount,
        views: +item.statistics.viewCount,
        publishedAt: item.snippet.publishedAt,
        description: isDetailed ? item.snippet.description : null,
        dataBar: this.getDataBarColor(item.snippet.publishedAt),
      }
    });
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
