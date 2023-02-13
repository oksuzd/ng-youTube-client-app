import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter();

  onSearchHeader(event: string): void {
    this.onSearch.emit(event);
  }

  onShowHeader(event: boolean): void {
    this.onShow.emit(event);
  }



}
