import { Injectable } from '@angular/core';
import { DetailedItem } from "@youtube/models";

@Injectable({ providedIn: 'root' })
export class DataStoreService {
  private data: DetailedItem | undefined;

  constructor() {}

  setDataItem(data: DetailedItem): void {
    this.data = data;
  }
}
