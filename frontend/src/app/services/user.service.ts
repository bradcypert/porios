import { Http, Headers } from '@angular/http';
import { Injectable, bind } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject, BehaviorSubject } from 'rxjs';

import { User } from '../data/user.component';
import { SessionService } from './session.service';
import { CookieService } from './cookie.service';
import { RestService } from './rest.service';

@Injectable()
export class UserService {
    private verify: any;
    private request: string;
    private method: string;
    private data: Object = {};
    private token: string = 'new';
    private url: string = '';
    private response: any;

    public currentUser: Subject<User> = new BehaviorSubject<User>(null);

    constructor( private _sessionService: SessionService, private _restService: RestService, private _cookieService: CookieService) { }

    logout() {
        sessionStorage.removeItem('uid_token');
    }

    login(username: string, password: string) {
        let data = {
            email: username,
            password: password
        }
        return this.verify = this.verifyLogin(data);
    }

    create(username: string, password: string) {
        let data = {
            email: username,
            password: password
        }
        this._restService.postRequest('users',data)
            .subscribe(
                (data) => this.login(username, password),
                (err) => err
            )
    }

    getCurrentUser() {
        if (localStorage.getItem('uid_token')) {
            return this._restService.getRequest('users/me');
        }
    }

    verifyLogin(data: any) {
        return this._restService.postRequest('login',data);
    }

    validateUser() {
        if (sessionStorage.getItem('uid_token')) {
            return true;
        } else {
            return false;
        }
    }

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }

    private handleError(error: any) {
        console.error('An error occurred: ', error);
        return Promise.reject(error.message || error);
    }

}

export var userServiceInjectables: Array<any> = [
    bind(UserService).toClass(UserService)
];