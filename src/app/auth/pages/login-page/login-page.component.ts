import { Component, OnInit } from '@angular/core';
import { User } from "@auth/models/user.model";
import { UserDataService } from "@shared/services/user-data.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  user: User | undefined | null;
  loginValue: string | null = null;
  passwordValue: string | null = null;

  constructor(private userData:UserDataService,
              private location: Location) {}

  ngOnInit() {
    let data = this.userData.loadData();
    this.loginValue = data?.login;
    this.passwordValue = data?.password;
  }

  logIn() {
    this.user = {
      login: this.loginValue,
      password: this.passwordValue
    };
    this.userData.saveData(this.user);
    this.location.back();
  }

  logOut() {
    this.userData.deleteData();
    this.user = this.loginValue = this.passwordValue = null;
  }
}
