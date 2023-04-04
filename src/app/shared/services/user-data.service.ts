import { Injectable } from '@angular/core';
import { User } from "@auth/models/user.model";

@Injectable()
export class UserDataService {

  private readonly authKey: string = 'isAuthorised';

  constructor() {
  }

  saveData(user: User): void {
    if (user?.login && user?.password) {
      localStorage.setItem(this.authKey, JSON.stringify(user));
    }

  }

  loadData(): User {
    let data: string | null = localStorage.getItem(this.authKey);
    return JSON.parse(data!);
  }

  deleteData() {
    localStorage.removeItem(this.authKey);
  }

}
