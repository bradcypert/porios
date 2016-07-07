import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { RestService } from './rest.service';
import { Podcast } from '../data/podcast.component';

@Injectable()
export class PodcastService {
    
    constructor ( private _http: Http, private _rest: RestService ) { }
    
    getPodcasts() {
        return this._rest.getRequest('/podcasts')
            .then(response => (
                response.json()
            ))
            .catch(this.handleError);
    }
    
    getPodcast(id: number) {
        return this.getPodcasts()
            .then(podcasts => podcasts.filter((podcast: Podcast) => podcast.id === id)[0]);
    }
    
    private handleError(error: any) {
        console.error('An error occurred: ', error);
        return Promise.reject(error.message || error);
    }
}