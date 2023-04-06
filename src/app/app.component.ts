import { Component, OnInit } from '@angular/core';
import { Criteria } from "@youtube/models";
import { UserDataService } from "@shared/services/user-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng-youTube-client-app';

  message: string = '';
  isShown: boolean = false;
  selectedCriteria!: Criteria;

  constructor(private userData:UserDataService) {
  }

  ngOnInit() {
    this.userData.loadData()
  }

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
