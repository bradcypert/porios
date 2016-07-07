import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'account',
    template: require('./account.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
])
export class AccountComponent {

    constructor(private _userService: UserService, private _router: Router) { }

    ngOnInit() {
        if (!this._userService.validateUser()) {
            this._router.navigate(['Login']);
        }
    }

}