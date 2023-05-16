export interface SearchResponse {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  regionCode:    string;
  pageInfo:      PageInfo;
  items:         SearchResponseItem[];
}

export interface SearchResponseItem {
  kind:    ItemKind;
  etag:    string;
  id:      ID;
  snippet: Snippet;
}

export interface ID {
  kind:    IDKind;
  videoId: string;
}

enum IDKind {
}

enum ItemKind {
}

interface Snippet {
  publishedAt:          Date | string;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime:          Date;
}

enum LiveBroadcastContent {
  None = "none",
}

interface Thumbnails {
  default: Default;
  medium:  Default;
  high:    Default;
}

interface Default {
  url:    string;
  width:  number;
  height: number;
}

interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
