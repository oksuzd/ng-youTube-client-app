import { Component } from '@angular/core';
import { SearchResultDataService } from "@youtube/services";

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent {

  isFilterShown: boolean = false;

  constructor(private filterService: SearchResultDataService) {
  }

  show(): void {
    this.isFilterShown = !this.isFilterShown;
    this.filterService.showFilter(this.isFilterShown);
  }
}
