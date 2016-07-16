import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import { TitleService } from "../../services/title.service";

@Component ({
    selector: 'settings',
    template: require('./settings.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class SettingsComponent {

    private currentUser: any;

    constructor( private _router: Router, private _userService: UserService, private _ga: AnalyticsService, private _title: TitleService ) { }

    ngOnInit() {
        this._title.setTitle('Settings');

        if (this._userService.validateUser() == false) {
            console.log('Route Away');
            this._router.navigate(['Account/Login']);
        } else {
            this._ga.page();
            this._userService.getCurrentUser()
                .then(
                    (data: any) => {
                        this.currentUser = JSON.parse(data._body)[0];
                        console.log(this.currentUser);
                    }
                )
                .catch(
                    (err) => {
                        console.error(err);
                    }
                )
        }
    }

    onSubmit() {
        console.log(this.currentUser);
        this._userService.update(this.currentUser);
    }
}