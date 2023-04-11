import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@shared/services/user-data.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string | null = '';

  constructor(private userData: UserDataService) {}

  ngOnInit() {
    this.createSubscriptionOnUserAuth();
  }

  private createSubscriptionOnUserAuth() {
    this.userData.userLogin$.pipe(debounceTime(1000)).subscribe((res) => {
      this.userName = res ? (this.userName = res) : 'Your Name';
    });
  }
}
