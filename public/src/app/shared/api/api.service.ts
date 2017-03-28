import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http';

import { Config } from '../config';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  public patchRequest(method: string, data: Object = {}) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', Config.token);

    return this.http.patch(Config.apiUrl + method, JSON.stringify(data), headers)
      .catch(this._handleError);
  }

  public postRequest(method: string, data: Object = {}) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', Config.token);

    return this.http.post(Config.apiUrl + method, JSON.stringify(data), headers)
      .catch(this._handleError);
  }

  public getRequest(method: string) {
    let headers = new Headers();

    headers.append('Authorization', Config.token);

    return this.http.get(Config.apiUrl + method, headers)
      .catch(this._handleError);
  }

  private _handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
