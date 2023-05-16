import { Injectable } from '@angular/core';
import { RenderedItem } from "@youtube/models";

@Injectable({ providedIn: 'root' })
export class DataStoreService {
  private data: RenderedItem | undefined;

  constructor() {}

  setSearchTermDataItem(data: RenderedItem): void {
    this.data = data;
  }
}
