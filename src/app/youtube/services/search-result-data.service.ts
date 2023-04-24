import { Injectable } from '@angular/core';
import moment from 'moment/moment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { BarColor, DetailedItem, YoutubeResponse } from "@youtube/models";


@Injectable({providedIn: 'root'})
export class SearchResultDataService {
  private _searchResultData$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly searchResultData$: Observable<string> = this._searchResultData$.asObservable();

  private _filterIsShown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly filterIsShown$: Observable<boolean> = this._filterIsShown$.asObservable();

  private apiKey: string = 'AIzaSyBQU44dUci6KlPRK7Ogbc3zW5c0L9Ls6RU';
  private maxResults: string = '30';
  //TODO change type
  videos: any = [];

  constructor(private http: HttpClient) {
  }

  getData(): Observable<DetailedItem[]> {
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?' +
      'part=snippet&part=statistics&chart=mostPopular&maxResults=' +
      this.maxResults + '&key=' + this.apiKey;


    // let url = 'https://www.googleapis.com/youtube/v3/videos?key=' + this.apiKey
    //   + '&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics';
    // let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${text}&type=video&key=${this.apiKey}`
    return this.http.get<YoutubeResponse>(url)
      .pipe(
        tap(res => console.log('res.items: ', res.items)),
        map((res) => this.mapData(res)
        ))
  }

  getItemById(id: string): DetailedItem | undefined {
    // return this.mapData(RESPONSE_DATA, true).find((item) => item.id === id);
    return this.mapData(this.videos, true).find((item) => item.id === id);
  }

  private mapData(data: YoutubeResponse, isDetailed: boolean = false): DetailedItem[] {
    return data.items.map((item) => {
      return {
        id: item.id,
        imgUrl: isDetailed
          ? item.snippet.thumbnails.maxres?.url
          : item.snippet.thumbnails.medium.url,
        views: +item.statistics.viewCount,
        likes: +item.statistics.likeCount,
        comments: +item.statistics.commentCount,
        title: item.snippet.title,
        // id: item.id,
        // title: item.snippet.title,
        // imgUrl: isDetailed
        //   ? item.snippet.thumbnails.maxres?.url
        //   : item.snippet.thumbnails.medium.url,
        // comments: +item.statistics.commentCount,
        // // dislikes: +item.statistics.dislikeCount,
        // // dislikes: '0',
        // likes: +item.statistics.likeCount,
        // views: +item.statistics.viewCount,
        // publishedAt: item.snippet.publishedAt,
        // description: isDetailed ? item.snippet.description : null,
        dataBar: this.getDataBarColor(item.snippet.publishedAt),
      };
    });
  }

  private getDataBarColor(date: string | Date): BarColor {
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

  setData(data: string) {
    this._searchResultData$.next(data);
  }

  showFilter(flag: boolean) {
    this._filterIsShown$.next(flag);
  }
}
