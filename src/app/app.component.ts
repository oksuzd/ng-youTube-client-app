import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-youTube-client-app';

  message: string = '';
  isShown: boolean = false;
  isPopularStatus = false;

  onSearch(event: string): void {
    this.message = event;
  }

  onShow(event: boolean): void {
    this.isShown = event;
  }

  onPopular(event: boolean): void {

    console.log('App onPopular', event)
    this.isPopularStatus = event;
  }
}
