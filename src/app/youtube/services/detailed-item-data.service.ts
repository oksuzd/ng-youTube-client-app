import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DetailedItem, DetailsResponse} from "@youtube/models";
import { catchError, map, Observable, throwError } from "rxjs";
import { Helper } from "@shared/helpers";
import { API_KEY } from "@shared/constants";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class DetailedItemDataService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  getDetailedData(id: string): Observable<DetailedItem> {
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&' +
      `id=${id}&` +
      `key=${API_KEY}`;

    return this.http.get<DetailsResponse>(url)
      .pipe(
        map((res) => this.mapData(res)),
        catchError(err => {
          // this.snackBar.open('Error getting video details', ' X ', )
          if (err.status === 404) {
            this.snackBar.open('Video not found', ' X ', )
          }
          return throwError(err)
        })
      )
  }

  private mapData(data: DetailsResponse): DetailedItem {
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
}
