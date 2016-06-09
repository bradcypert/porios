import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Podcast } from '../../data/podcast.component';
import { PodcastService } from '../../services/podcast.service';

@Component ({
    selector: 'explore',
    template: require('./exploredetail.component.html'),
    providers: [
        PodcastService
    ]
})
export class ExploreDetailComponent {
    constructor(private _podcastService: PodcastService, private _routeParams: RouteParams) { }

    podcast: Podcast;

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._podcastService.getPodcast(id)
            .then((podcast: Podcast) => this.podcast = podcast)
    }

    goBack() {
        window.history.back();
    }
}