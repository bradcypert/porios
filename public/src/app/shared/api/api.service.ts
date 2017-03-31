import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http';

import { DBService } from '../db';
import { LoadingService } from '../loading';

import { Config } from '../config';

@Injectable()
export class ApiService {

  constructor (
    private _http: Http,
    private _db: DBService,
    private _loadingService: LoadingService
  ) {
  }

  public patchRequest(method: string, data: Object = {}) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    data = this._transformRequest(data);
    this._loadingService.toggleLoader(true);

    return this._http.patch(Config.apiUrl + method, data, options)
      .map((res) => {
        this._loadingService.toggleLoader(false);
        return res;
      })
      .catch(this._handleError);
  }

  public postRequest(method: string, data: Object = {}) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    data = this._transformRequest(data);
    this._loadingService.toggleLoader(true);

    return this._http.post(Config.apiUrl + method, data, options)
      .map((res) => {
        this._loadingService.toggleLoader(false);
        return res;
      })
      .catch(this._handleError);
  }

  public getRequest(method: string) {
    let headers = new Headers();
    headers.append('Authorization', Config.token);
    let options = new RequestOptions({ headers });
    this._loadingService.toggleLoader(true);
    
    return this._http.get(Config.apiUrl + method, options)
      .map((res) => {
        this._loadingService.toggleLoader(false);
        return res;
      })
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
    this._loadingService.toggleLoader(false);
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
