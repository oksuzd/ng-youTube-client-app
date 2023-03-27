export interface Item {
  id: string,
  imgUrl: string,
  views: number,
  likes: number,
  isLiked?: boolean,
  dislikes: number,
  isDisliked?: boolean,
  comments: number,
  title: string,
  publishedAt?: string,
  description?: string | null,
  dataBar: BarColor
}

export enum BarColor {
  blue = '#2F80ED',
  red = 'red',
  yellow = 'yellow',
  green = 'green',
  default = '#E5E5E5',
}
