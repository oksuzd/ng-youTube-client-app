import { Injectable } from '@angular/core';
import { User } from '@auth/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserDataService {
  private readonly authKey: string = 'isAuthorised';

  private _userLogin$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  readonly userLogin$: Observable<string> = this._userLogin$.asObservable();

  constructor() {
  }

  saveData(user: User): void {
    if (user?.login && user?.password) {
      localStorage.setItem(this.authKey, JSON.stringify(user));
      this._userLogin$.next(user.login);
    }
  }

  loadData(): User {
    let data: string | null = localStorage.getItem(this.authKey);
    const result = JSON.parse(data!);
    this._userLogin$.next(result?.login);
    return result;
  }

  deleteData() {
    localStorage.removeItem(this.authKey);
    this._userLogin$.next('');
  }
}
