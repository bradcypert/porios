import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { User } from '../../data/user.component';
import { UserService } from '../../services/user.service';

@Component ({
    selector: 'login',
    template: require('./login.component.html'),
    directives: [
        FORM_DIRECTIVES
    ]
})
export class LoginComponent {
    private user: User = new User();
    private loginForm: ControlGroup;
    
    constructor( private _router: Router, private _userService: UserService, private fb: FormBuilder ) { }
    
    login(){
        this._userService.login(this.user.username, this.user.password);
    }
}