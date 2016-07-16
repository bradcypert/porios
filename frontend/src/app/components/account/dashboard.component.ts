import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { User } from '../../data/user.component';
import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import {TitleService} from "../../services/title.service";

@Component ({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    directives: [
        FORM_DIRECTIVES
    ]
})
export class DashboardComponent {
    private user: User = new User('', '');
    private loginForm: ControlGroup;
    
    constructor( private _router: Router, private _userService: UserService, private fb: FormBuilder, private _ga: AnalyticsService, private _title: TitleService ) { }
    
    logout() {
        this._userService.logout();
        this._router.navigate(['/Account/Login']);
    }

    ngOnInit() {
        this._title.setTitle('Account');
        this._ga.page();
        console.log(this._userService.getCurrentUser());
    }

}