import { Injectable } from '@angular/core';
import { Response } from "../../../models/search-response.model";
import { RESPONSE_DATA } from "./mock-data";

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
