import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private message = '';

  setInputValue(value: string): void {
    this.message = value;
    console.log('result', this.message);
  }

  getInputValue(): string {
    return this.message;
  }

}
