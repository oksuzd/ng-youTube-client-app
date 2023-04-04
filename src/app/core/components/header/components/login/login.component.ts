import { Component, OnInit } from '@angular/core';
import { UserDataService } from "@shared/services/user-data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string | null = '';

  constructor(private userData: UserDataService) {
  }

  ngOnInit() {
    this.userName = this.userData.loadData()?.login ?? 'Your Name';
  }

}
