import { Injectable } from '@angular/core';
import { Item } from '@youtube/models';

@Injectable({ providedIn: 'root' })
export class DataStoreService {
  private data: Item | undefined;

  constructor() {}

  setDataItem(data: Item): void {
    this.data = data;
  }
}
