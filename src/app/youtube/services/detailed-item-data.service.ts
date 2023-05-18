import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DetailedItem, DetailsResponse} from "@youtube/models";
import { map, Observable } from "rxjs";
import { Helper } from "@shared/helpers";
import { API_KEY } from "@shared/constants";

@Injectable({
  providedIn: 'root'
})
export class DetailedItemDataService {

  constructor(private http: HttpClient) {
  }

  getDetailedData(id: string): Observable<DetailedItem> {
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&' +
      `id=${id}&` +
      `key=${API_KEY}`;

    return this.http.get<DetailsResponse>(url)
      .pipe(
        map((res) => this.mapData(res))
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
