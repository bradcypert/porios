import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
    constructor( private router: Router) {}

    canActivate() {
        return true;
    }
}