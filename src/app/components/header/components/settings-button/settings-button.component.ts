import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent {

  @Output() onShow: EventEmitter<boolean> = new EventEmitter();

  isFilterShown: boolean = false;

  show(): void {
    // this.onShow.emit(!this.isFilterShown);
    console.log(!this.isFilterShown);
    this.isFilterShown = !this.isFilterShown;
    this.onShow.emit(this.isFilterShown);

  }

}
