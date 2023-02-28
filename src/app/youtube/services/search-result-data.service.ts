import { Injectable } from '@angular/core';
import { Response } from "@youtube/models";
import { RESPONSE_DATA } from "@youtube/services/mock-data";


@Injectable({
  providedIn: 'root'
})
export class SearchResultDataService {

  constructor() {
  }

  getData(): Response {
    return RESPONSE_DATA;
  }
}
