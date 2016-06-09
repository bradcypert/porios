import { Injectable } from '@angular/core';
import { PODCASTS } from '../mock/mock-podcasts';
import { Podcast } from '../data/podcast.component';

@Injectable()
export class PodcastService {
    getPodcasts() {
        return Promise.resolve(PODCASTS);
    }
    getPodcast(id: number) {
        return this.getPodcasts()
            .then(podcasts => podcasts.filter(podcast => podcast.id === id)[0]);
    }
}