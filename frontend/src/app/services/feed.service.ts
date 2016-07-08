import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

@Injectable()
export class FeedService {
        
    constructor ( private _http: Http, private _jsonp: Jsonp ) { }

    getFeed(url: string) {
        let jspUrl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSONP_CALLBACK&output=json_xml&q=' + url;
        return this._jsonp.request(jspUrl)
            .toPromise()
            .then(response => {
                console.log(response);
                return response.json();
            })
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred: ', error);
        return Promise.reject(error.message || error);
    }
}