import { Component} from '@angular/core';
import { Criteria } from "@youtube/models";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-youTube-client-app';

  message: string = '';
  isShown: boolean = false;
  selectedCriteria!: Criteria;

  onSearch(event: string): void {
    this.message = event;
  }

  onShow(event: boolean): void {
    this.isShown = event;
  }

  onCriteria(event: Criteria): void {
    this.selectedCriteria = event;
  }
}
