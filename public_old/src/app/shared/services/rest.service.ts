import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

@Injectable()
export class RestService {

    private _apiUrl: string = 'http://104.131.175.67:3000/';
    private _headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor( private _http: Http ) {

    }

    /**
     * GET Data From Server
     * ARGS - endpoint('users/me')
     */
    get(endpoint: string) {
        let url = this._apiUrl + endpoint

        return this._http.get(url, { headers: this._headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    /**
     * POST Data To Server
     * ARGS - endpoint('login'), data({email: '', password: ''})
     */
    post(endpoint: string, data: Object) {
        let url = this._apiUrl + endpoint

        return this._http.post(url, JSON.stringify(data), { headers: this._headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    handleError(err: Error) {
        console.error(err);
    }
}