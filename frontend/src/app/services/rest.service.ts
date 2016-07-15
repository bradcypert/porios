import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'; 

@Injectable()
export class RestService {
    
    public dataPool: Object = {};

    private apiUrl: string = 'http://104.131.175.67:3000/';

    constructor ( private http: Http ) { }

    postLoad(domain: string, data: any) {
        this.dataPool[domain] = data;
    }

    getData(method: string, callback: Function) {
        let domain = method.split('/')[0];
        let params = method.split('/')[1];

        if (this.dataPool[domain]) {
            this.getRequest(method);
            callback(this.dataPool[domain]);
        }

        this.getRequest(method)
            .then(res => {
                callback(res.json());
            });
        
    }

    patchRequest(method:string, data: Object = {}) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('uid_token'));

        return this.http.patch(this.apiUrl + method, JSON.stringify(data), {headers: headers})
            .toPromise()
            .then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error('This request has failed ' + response.status);
                } else {
                    return response
                }
            })
            .catch(this.handleError);
    }

    postRequest(method: string, data: Object = {}) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('uid_token'));

        return this.http.post(this.apiUrl + method, JSON.stringify(data), {headers: headers})
            .toPromise()
            .then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error('This request has failed ' + response.status);
                } else {
                    return response
                }
            })
            .catch(this.handleError);
    }

    getRequest(method: string) {
        let headers = new Headers();

        headers.append('Authorization', localStorage.getItem('uid_token'));
        
        return this.http.get(this.apiUrl + method, {headers: headers})
            .toPromise()
            .then(response => {
                this.postLoad('podcasts', response.json());
                return response;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}