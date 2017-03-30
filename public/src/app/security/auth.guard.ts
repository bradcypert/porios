import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

import { Config } from '../shared/config';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private _router: Router ) {

  }

  public canActivate() {
    if (Config.token) {
      return true;
    } else {
      this._router.navigate(['/Login']);
      return false;
    }
  }

}
