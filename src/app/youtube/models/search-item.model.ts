export interface RenderedItem {
  id: string;
  kind: string;
  imgUrl?: string;
  title: string;
  channelTitle: string;
  channelId: string;
  publishedAt: string | Date;
  description?: string | null;
  dataBar?: BarColor;
}

export interface DetailedItem {
  id: string;
  title?: string;
  channelTitle?: string;
  publishedAt?: string | Date;
  description?: string | null;
  dataBar?: BarColor;
  imgUrl?: string;
  views?: number;
  likes?: number;
  comments?: number;
}

export enum BarColor {
  Blue = '#2F80ED',
  Red = 'Red',
  Yellow = 'Yellow',
  Green = 'Green',
  Default = '#E5E5E5',
}

export enum OrderParam {
  Date = 'Date',
  Rating = 'Rating',
  ViewCount = 'ViewCount',
  Title = 'Title',
  Relevance = 'Relevance'
}

export interface SearchParams {
  order?: OrderParam;
  maxResults?: string | undefined;
}
