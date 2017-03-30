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
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    data = this._transformRequest(data);

    return this.http.patch(Config.apiUrl + method, data, options)
      .catch(this._handleError);
  }

  public postRequest(method: string, data: Object = {}) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    data = this._transformRequest(data);

    return this.http.post(Config.apiUrl + method, data, options)
      .catch(this._handleError);
  }

  public getRequest(method: string) {
    let headers = new Headers();
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    
    return this.http.get(Config.apiUrl + method, options)
      .catch(this._handleError);
  }

  private _transformRequest(params: Object) {
    let strArray: string[] = [];
    for (let param in params) {
      if (param) {
        strArray.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
      }
    }
    return strArray.join('&');
  }

  private _handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
