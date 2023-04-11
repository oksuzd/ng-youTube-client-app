import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserDataService } from "@shared/services/user-data.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  isAuth: boolean = false;

  constructor(private userData: UserDataService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.createSubscriptionOnUserAuth();
    console.log('canActivate: ', this.isAuth);
    return this.isAuth;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.createSubscriptionOnUserAuth();
    console.log('canLoad: ', this.isAuth);
    return this.isAuth;
  }

  private createSubscriptionOnUserAuth() {
    this.userData.userLogin$
      .pipe(take(1))
      .subscribe(res => {
        this.isAuth = !!res;
      })
  }
}
