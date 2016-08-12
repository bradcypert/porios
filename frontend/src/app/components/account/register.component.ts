import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router';

import { User } from '../../data/user.component';
import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import { TitleService } from "../../services/title.service";

@Component ({
    selector: 'register',
    template: require('./register.component.html')
})
export class RegisterComponent {

    public avatar: string;
    
    constructor( private _router: Router, private _userService: UserService, private _ga: AnalyticsService, private _title: TitleService ) { }
    
    ngOnInit() {
        this._title.setTitle('Login');
        this._ga.page();
        this.avatar = 'src/assets/img/avatar.png';
    }

    register(form: any) {
        this._userService.register(form.value.username, form.value.password)
        .then(
            (data) => {
                this.loginSuccess(data)
                this._router.navigate(['/Account/Dashboard']);
            },
            (err) => {
                this.loginFailure(err)
            }
        )
    }

    login(form: any){
        console.log(form);
        this._userService.login(form.value.username, form.value.password)
        .then(
            (data) => {
                this.loginSuccess(data)
                this._router.navigate(['/Account/Dashboard']);
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
    
}