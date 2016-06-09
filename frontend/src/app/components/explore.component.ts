import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { Podcast } from '../data/podcast.component';
import { PodcastService } from '../services/podcast.service';

@Component({
    selector: 'explore',
    template: require('./explore.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        PodcastService
    ]
})
export class ExploreComponent {
    podcasts: Podcast[];

    constructor(private _podcastService: PodcastService, private _router: Router) { }

    getPodcasts() {
        this._podcastService.getPodcasts().then(podcasts => this.podcasts = podcasts);
    }

    ngOnInit() {
        this.getPodcasts();
    }

    exploreDetail(podcast: Podcast) {
        let link = ['ExploreDetail', { id: podcast.id }];
        this._router.navigate(link);
    }
}