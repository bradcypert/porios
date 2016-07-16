import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { User } from '../../data/user.component';
import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import {TitleService} from "../../services/title.service";

@Component ({
    selector: 'login',
    template: require('./login.component.html'),
    directives: [
        FORM_DIRECTIVES
    ]
})
export class LoginComponent {
    private user: any = {
        'username': '',
        'password': ''
    };
    private loginForm: ControlGroup;

    public avatar: string;
    
    constructor( private _router: Router, private _userService: UserService, private fb: FormBuilder, private _ga: AnalyticsService, private _title: TitleService ) { }
    
    ngOnInit() {
        this._title.setTitle('Login');
        this._ga.page();
        this.avatar = 'src/assets/img/avatar.png';
    }

    login(){
        this._userService.login(this.user.username, this.user.password)
        .then(
            (data) => {
                this.loginSuccess(data)
                this._router.navigate(['Dashboard']);
            },
            (err) => {
                this.loginFailure(err)
            }
        );
    }

    clearSession() {
        localStorage.removeItem('uid_token');
    }

    private loginSuccess(data: any) {   
        localStorage.setItem('uid_token', data._body);    
    }

    private loginFailure(error: any) {
        
    }

    create(){
        this._userService.create(this.user.username, this.user.password);
    }
    
}