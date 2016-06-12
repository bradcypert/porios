import { Http, Headers } from '@angular/http';
import { Injectable, bind } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject, BehaviorSubject } from 'rxjs';

import { User } from '../data/user.component';
import { CookieService } from '../services/cookie.service';
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

    constructor(private _http: Http, private _cookieService: CookieService) { }

    login(username: string, password: string) {
        let data = {
            username: username,
            password: password
        }
        this.verify = this.verifyLogin(data);
    }

    verifyLogin(data: Object) {
        this.response = this.addRequest('', 'json').run();
        return this.response;
    }

    addRequest(endpoint: string, method: string, id = 0, data = {}) {
        let passed = (id !== undefined && id != 0) ? '(' + id + ')' : '';
        this.request = endpoint;
        this.method = method;
        return this;
    }

    run() {
        return this._http.get(this.url + this.request + this.method)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    validateUser() {
        return false;
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