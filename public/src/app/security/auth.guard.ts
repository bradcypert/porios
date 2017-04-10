import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Config } from '../shared/config';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private _router: Router ) {

  }

  public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if (Config.token) {
      return true;
    } else {
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}
