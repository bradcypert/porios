import { Injectable } from '@angular/core';

import { Config } from '../config';
import { ApiService } from '../api';
import { User } from './user';

@Injectable()
export class UserService {

    constructor( private _api: ApiService ) {

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

}
