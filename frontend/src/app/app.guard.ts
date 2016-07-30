import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { RestService } from './services/rest.service';

@Injectable()
export class AppGuard implements CanActivate {
    constructor( private _router: Router, private _restService: RestService ) {}

    canActivate() {
        return this._restService.subRequest('users/me')
            .map( res => {
                if ( res.json().length > 0 ) {
                    return true;
                }
                this._router.navigate(['/Account/Login']);
                return false;
            });
    }
}