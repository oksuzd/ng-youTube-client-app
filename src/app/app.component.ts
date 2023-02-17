import { Component} from '@angular/core';
import { Criteria } from "./models/filters.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-youTube-client-app';

  message: string = '';
  isShown: boolean = false;
  // isPopularStatus: boolean = false;
  selectedCriteria!: Criteria;

  onSearch(event: string): void {
    this.message = event;
  }

  onShow(event: boolean): void {
    this.isShown = event;
  }

  // onPopular(event: boolean): void {
  //   this.isPopularStatus = event;
  // }

  onCriteria(event: Criteria): void {
    this.selectedCriteria = event;
  }
}
