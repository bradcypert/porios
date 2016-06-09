import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Podcast } from '../data/podcast.component';

@Injectable()
export class PodcastService {
    
    private podcastsUrl = 'http://localhost:9000/podcasts'
    
    constructor ( private _http: Http ) { }
    
    getPodcasts() {
        return this._http.get(this.podcastsUrl)
            .toPromise()
            .then(response => (
                response.json()
            ))
            .catch(this.handleError);
    }
    
    getPodcast(id: number) {
        return this.getPodcasts()
            .then(podcasts => podcasts.filter((podcast: Podcast) => podcast.id === id)[0]);
    }
    
    save(podcast: Podcast) {
        if (podcast.id) {
            return this.put(podcast);
        }
        return this.post(podcast);
    }
    
    delete(podcast: Podcast) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = `${this.podcastsUrl}/${podcast.id}`;
        
        return this._http.delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }
    
    private post(podcast: Podcast) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this._http.post(this.podcastsUrl, JSON.stringify(podcast), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    
    private put(podcast: Podcast) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = `${this.podcastsUrl}/${podcast.id}`
        
        return this._http.put(url, JSON.stringify(podcast), {headers: headers})
            .toPromise()
            .then(() => podcast)
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred: ', error);
        return Promise.reject(error.message || error);
    }
}