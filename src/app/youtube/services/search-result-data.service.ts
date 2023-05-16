import { Injectable } from '@angular/core';
import moment from 'moment/moment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { BarColor, OrderParam, RenderedItem, SearchParams, SearchResponse } from "@youtube/models";


@Injectable({providedIn: 'root'})
export class SearchResultDataService {

  private _searchResultData$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly searchResultData$: Observable<string> = this._searchResultData$.asObservable();

  private _searchParamsIsShown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly searchParamsIsShown$: Observable<boolean> = this._searchParamsIsShown$.asObservable();

  private selectedSearchParams: SearchParams = {
    order: OrderParam.Relevance,
    maxResults: '10',
  }
  private prevSearchParamsState: SearchParams = this.selectedSearchParams;
  private _searchParamsData$: BehaviorSubject<SearchParams> = new BehaviorSubject<SearchParams>(this.selectedSearchParams);
  readonly searchParamsData$: Observable<SearchParams> = this._searchParamsData$.asObservable();

  private apiKey: string = 'AIzaSyBQU44dUci6KlPRK7Ogbc3zW5c0L9Ls6RU';

  constructor(private http: HttpClient) {
  }

  setSearchTermData(data: string) {
    this._searchResultData$.next(data);
  }

  setSearchParamsData(data: SearchParams) {
    let newParams = this.prevSearchParamsState;

    if (data.order) {
      this.prevSearchParamsState.order = data.order;
      newParams.order = data.order;
    } else if (data.maxResults) {
      this.prevSearchParamsState.maxResults = data.maxResults;
      newParams.maxResults = data.maxResults;
    }

    this._searchParamsData$.next(newParams);
  }

  getSearchResultData(
    query: string,
    maxResults: string | undefined,
    order: OrderParam = OrderParam.Relevance,
  ): Observable<RenderedItem[]> {
    let url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&' +
      `maxResults=${maxResults}&` +
      `order=${order}&` +
      `q=${query}&` +
      `key=${this.apiKey}`;

    return this.http.get<SearchResponse>(url)
      .pipe(
        map((res) => this.mapData(res))
      )
  }

  private mapData(data: SearchResponse): RenderedItem[] {
    return data.items.map((item) => {
      return {
        id: item.id.videoId,
        imgUrl: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        dataBar: this.getSearchResultDataBarColor(item.snippet.publishedAt),
      }
    })
  }

  private getSearchResultDataBarColor(date: string | Date): BarColor {
    const daysAmount = moment(new Date()).diff(moment(date), 'days');
    const monthAmount = moment(new Date()).diff(moment(date), 'months');

    if (daysAmount <= 7 && monthAmount === 0) {
      return BarColor.Blue;
    } else if (daysAmount > 7 && monthAmount === 0) {
      return BarColor.Green;
    } else if (monthAmount >= 1 && monthAmount <= 6) {
      return BarColor.Yellow;
    } else if (monthAmount > 6) {
      return BarColor.Red;
    } else {
      return BarColor.Default;
    }
  }

  showFilter(flag: boolean) {
    this._searchParamsIsShown$.next(flag);
  }
}
