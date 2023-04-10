import { Component, OnInit } from '@angular/core';
import { UserDataService } from "@shared/services/user-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng-youTube-client-app';

  constructor(private userData: UserDataService) {
  }

  ngOnInit() {
    this.userData.loadData();
  }
}
