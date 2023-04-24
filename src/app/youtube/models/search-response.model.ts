export interface YoutubeResponse {
  kind:          string;
  etag:          string;
  items:         ResponseItem[];
  nextPageToken: string;
  pageInfo:      PageInfo;
}

export interface ResponseItem {
  kind:       Kind;
  etag:       string;
  id:         string;
  snippet:    Snippet;
  statistics: Statistics;
}

enum Kind {
  YoutubeVideo = "youtube#video",
}

interface Snippet {
  publishedAt:           Date;
  channelId:             string;
  title:                 string;
  description:           string;
  thumbnails:            Thumbnails;
  channelTitle:          string;
  tags?:                 string[];
  categoryId:            string;
  liveBroadcastContent:  LiveBroadcastContent;
  defaultLanguage?:      DefaultLanguage;
  localized:             Localized;
  defaultAudioLanguage?: string;
}

enum DefaultLanguage {
  En = "en",
  EnUS = "en-US",
  Ko = "ko",
}

enum LiveBroadcastContent {
  None = "none",
}

interface Localized {
  title:       string;
  description: string;
}

interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres?:  Default;
}

interface Default {
  url:    string;
  width:  number;
  height: number;
}

interface Statistics {
  viewCount:     string;
  likeCount:     string;
  favoriteCount: string;
  commentCount:  string;
}

interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}

// export interface YoutubeResponse {
//   kind: string;
//   etag: string;
//   pageInfo: PageInfo;
//   items: ResponseItem[];
// }
//
// interface PageInfo {
//   totalResults: number;
//   resultsPerPage: number;
// }
//
// export interface ResponseItem {
//   kind: string;
//   etag: string;
//   id: string;
//   snippet: Snippet;
//   statistics: Statistics;
// }
//
// interface Snippet {
//   publishedAt: string | Date;
//   channelId: string;
//   title: string;
//   description: string;
//   thumbnails: Thumbnails;
//   channelTitle: string;
//   tags: string[];
//   categoryId: string;
//   liveBroadcastContent: string;
//   localized: Localized;
//   defaultAudioLanguage?: string;
// }
//
// interface Localized {
//   title: string;
//   description: string;
// }
//
// interface Thumbnails {
//   default: Default;
//   medium: Default;
//   high: Default;
//   standard?: Default;
//   maxres?: Default;
// }
//
// interface Default {
//   url: string;
//   width: number;
//   height: number;
// }
//
// interface Statistics {
//   viewCount: string;
//   likeCount: string;
//   favoriteCount: string;
//   commentCount: string;
// }
//
