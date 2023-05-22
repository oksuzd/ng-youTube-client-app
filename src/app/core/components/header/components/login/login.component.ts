import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@shared/services/user-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName$: Observable<string> | undefined;

  constructor(private userData: UserDataService) {
  }

  ngOnInit() {
    this.userName$ = this.userData.userLogin$
  }
}
