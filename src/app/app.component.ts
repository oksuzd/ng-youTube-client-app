import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message: string = '';
  title = 'ng-youTube-client-app';
  isShown: boolean = false;

  onSearch(event: string): void {
    this.message = event;
  }

  onShow(event: boolean): void {
    this.isShown = event;
  }

}
