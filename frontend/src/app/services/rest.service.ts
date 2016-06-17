import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'; 

@Injectable()
export class RestService {
    
    private payload: any;
    private apiUrl: string = 'http://localhost:9000/';

    constructor ( private http: Http ) { }

    postRequest(method: string, data: Object = {}) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('uid_token'));

        return this.http.post(this.apiUrl + method, JSON.stringify(data), {headers: headers})
            .map(res => {
                if(res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                } else {
                    return res
                }
            });
    }

    getRequest(method: string) {
        let headers = new Headers();

        headers.append('Authorization', localStorage.getItem('uid_token'));
        
        return this.http.get(this.apiUrl + method, {headers: headers})
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}