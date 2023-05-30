import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserDataService } from '@shared/services/user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  isAuth: boolean = false;

  constructor(private userData: UserDataService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.createSubscriptionOnUserAuth();
    return this.isAuth;
  }

  canLoad(route: Route, segments: UrlSegment[]
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.createSubscriptionOnUserAuth();
    if (!this.isAuth) {
      this.router.navigate(['auth']).then();
      return this.isAuth;
    }
    return this.isAuth;
  }

  private createSubscriptionOnUserAuth() {
    this.userData.userLogin$
      .pipe(take(1))
      .subscribe((res) => this.isAuth = !!res);
  }
}
