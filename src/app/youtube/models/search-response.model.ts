/* Search Results List Response */
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
  snippet: SearchSnippet;
}

export interface ID {
  kind:    IDKind;
  videoId: string;
}

enum IDKind {
}

enum ItemKind {
}

interface SearchSnippet {
  publishedAt:          Date | string;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           SearchThumbnails;
  channelTitle:         string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime:          Date;
}

enum LiveBroadcastContent {
  None = "none",
}

interface SearchThumbnails {
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

/* Detailed Video Response */
export interface DetailsResponse {
  kind:     string;
  etag:     string;
  items:    DetailedItemResponse[];
  pageInfo: PageInfo;
}

export interface DetailedItemResponse {
  kind:       string;
  etag:       string;
  id:         string;
  snippet:    DetailsSnippet;
  statistics: Statistics;
}

export interface DetailsSnippet {
  publishedAt:          Date;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           DetailsThumbnails;
  channelTitle:         string;
  tags:                 string[];
  categoryId:           string;
  liveBroadcastContent: string;
  localized:            Localized;
}

export interface Localized {
  title:       string;
  description: string;
}

export interface DetailsThumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Statistics {
  viewCount:     string;
  likeCount:     string;
  favoriteCount: string;
  commentCount:  string;
}
