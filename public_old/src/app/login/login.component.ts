import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestService } from '../shared/services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    
    private curAction: string = "login";
    private pulsar: string = 'red';
    private colorArray: Array<any> = [
        'red',
        '#3498db',
        '#8e44ad'
    ];

    constructor( private _restService: RestService, private _router: Router ) {

    }

    ngOnInit() {
        this.getColor();
    }

    onLogin(form: NgForm) {
        let data = {
            email: form.value['email'],
            password: form.value['password']
        }

        localStorage.setItem('uid', '12345');

        this._router.navigate(['/Home/']);

        // Disabled due to lack of WebService
        // this._restService.post('login', data)
        //     .then( (res: any) => {
        //         if (res.text()) {
        //             localStorage.setItem('uid', res.text());
        //         }
        //     })
    }

    onRegister(form: NgForm) {
        let data = {
            first_name: form.value['first_name'],
            last_name: form.value['last_name'],
            email: form.value['email'],
            password: form.value['password']
        }

        localStorage.setItem('uid', '12345');

        this._router.navigate['/Home/'];

        // Disabled due to lack of WebService
        // this._restService.post('users', data)
        //     .then( res => {
        //         console.log(res);
        //     })
    }

    getColor() { 
        let self = this;

        setTimeout( function() {
            self.pulsar = self.colorArray[Math.floor(Math.random() * self.colorArray.length)]
            self.getColor();
        }, 1200)
    }
    
}