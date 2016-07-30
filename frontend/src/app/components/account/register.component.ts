import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';

import { User } from '../../data/user.component';
import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import { TitleService } from "../../services/title.service";

@Component ({
    selector: 'register',
    template: require('./register.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_ICON_DIRECTIVES
    ]
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
        
    }

    login(form: any){
        console.log(form);
        this._userService.login(form.value.username, form.value.password)
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
    
}