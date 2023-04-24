export interface MockResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: MockItem[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface MockItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  publishedAt: string | Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage?: string;
}

interface Thumbnails {
  default: ThumbnailsParams;
  medium: ThumbnailsParams;
  high: ThumbnailsParams;
  standard: ThumbnailsParams;
  maxres: ThumbnailsParams;
}

interface ThumbnailsParams {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
