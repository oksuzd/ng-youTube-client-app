import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { OrderParam, RenderedItem, SearchParams, SearchResponse } from "@youtube/models";
import { Helper } from "@shared/helpers";
import { API_KEY } from "@shared/constants";
import { MatSnackBar } from "@angular/material/snack-bar";


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

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
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
      `key=${API_KEY}`;

    return this.http.get<SearchResponse>(url)
      .pipe(
        map((res) => this.mapData(res)),
        catchError(err => {
          if (err.status === 404) {
            this.snackBar.open('Video list not found', ' X ',)
          }
          return throwError(err)
        })
      )
  }

  private mapData(data: SearchResponse): RenderedItem[] {
    return data.items
      .map((item) => {
        return {
          id: item.id.videoId,
          kind: item.id.kind,
          imgUrl: item.snippet.thumbnails.medium.url,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          publishedAt: item.snippet.publishedAt,
          dataBar: Helper.getSearchResultDataBarColor(item.snippet.publishedAt),
        }
      })

  }

  showFilter(flag: boolean) {
    this._searchParamsIsShown$.next(flag);
  }
}
