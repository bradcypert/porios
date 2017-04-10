import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Config } from '../config';
import { ApiService } from '../api';
import { User } from './user';

@Injectable()
export class UserService {

    constructor( private _api: ApiService ) {

    }

    public whoami(): Observable<User> {
        return this._api.getRequest('users/me').map((res: Response) => {
            return new User(res.json()[0]);
        });
    }

    public login(user: User) {
        let data = {
            email: user.email,
            password: user.password
        };

        return this._api.postRequest('login', data);
    }

    public register(user: User) {
        let data = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: user.password
        };

        return this._api.postRequest('users', data);
    }

    public save(user: User, changePassword: boolean = false) {
        let data = {
            first_name: user.firstName,
            last_name: user.lastName
        };

        if (changePassword) {
            data['password'] = user.password;
        }

        return this._api.patchRequest('users/' + user.id, data);
    }

}
