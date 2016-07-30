import { Component, Injectable } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import { User } from '../../data/user.component';
import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import { RestService } from '../../services/rest.service';
import { TitleService } from "../../services/title.service";

@Injectable()
export class DashboardResolver implements Resolve<any> {
    constructor( private _restService: RestService ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._restService.subRequest('users/me');
    }
}

@Component ({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    directives: [
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_INPUT_DIRECTIVES
    ]
})
export class DashboardComponent {
    private user: any;
    
    constructor( private _router: Router, private _userService: UserService, private _ga: AnalyticsService, private _title: TitleService, private _route: ActivatedRoute ) { }

    ngOnInit() {

        this.user = this._route.snapshot.data['user'].json()[0];
        console.log(this.user);
        this._title.setTitle('Account');
        this._ga.page();
    }

    logout() {
        this._userService.logout();
        this._router.navigate(['/Account/Login']);
    }

    update(form: any) {
        this._userService.update(form);
    }

}