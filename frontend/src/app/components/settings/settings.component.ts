import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { UserService } from '../../services/user.service';

@Component ({
    selector: 'settings',
    template: require('./settings.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class SettingsComponent {

    private currentUser: any;

    constructor( private _router: Router, private _userService: UserService ) { }

    ngOnInit() {
        if (this._userService.validateUser() == false) {
            console.log('Route Away');
            this._router.navigate(['Account/Login']);
        } else {
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