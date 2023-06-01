import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DetailedItem, DetailsResponse } from "@youtube/models";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { Helper } from "@shared/helpers";
import { API_KEY } from "@shared/constants";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { NotFoundComponent } from "@core/pages/not-found/not-found.component";

@Injectable({
  providedIn: 'root'
})
export class DetailedItemDataService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  getDetailedData(id: string): Observable<DetailedItem | null> {
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&' +
      `id=${id}&` +
      `key=${API_KEY}`;

    return this.http.get<DetailsResponse>(url)
      .pipe(
        tap((res) => {
          if (!res.items.length) {
            this.router.navigate([NotFoundComponent]).then();
          }
        }),
        map((res) => this.mapData(res)),
        catchError(err => {
          if (err.status === 404) {
            this.snackBar.open('Video not found', ' X ',)
          }
          return throwError(err)
        })
      )
  }


  private mapData(data: DetailsResponse): DetailedItem | null {
    if (!!data.items.length) {
      let item = data.items[0];

      return {
        id: item.id,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        imgUrl: item.snippet.thumbnails.high.url,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        views: +item.statistics.viewCount,
        likes: +item.statistics.likeCount,
        comments: +item.statistics.commentCount,
        dataBar: Helper.getSearchResultDataBarColor(item.snippet.publishedAt),
      }
    }
    return null;
  }
}
