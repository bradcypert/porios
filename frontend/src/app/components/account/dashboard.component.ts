import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from '../../data/user.component';
import { UserService } from '../../services/user.service';

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
    
    constructor( private _router: Router, private _userService: UserService, private fb: FormBuilder ) { }
    
    ngOnInit() {
        console.log(this._userService.getCurrentUser());
    }

}