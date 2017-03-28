import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RestService } from '../shared/services';

@Component({
    selector: 'register',
    template: require('./register.component.html'),
    styles: [ require('./login.component.scss') ]
})
export class RegisterComponent {
    
    constructor( private _restService: RestService ) {

    }

    onSubmitEvent(form: NgForm) {
        let data = {
            first_name: form.value['first_name'],
            last_name: form.value['last_name'],
            email: form.value['email'],
            password: form.value['password']
        }

        this._restService.post('users', data)
            .then( res => {
                console.log(res);
            })
    }

}