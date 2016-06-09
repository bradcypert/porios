import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Podcast } from '../../data/podcast.component';
import { PodcastService } from '../../services/podcast.service';
import { FeedService } from '../../services/feed.service';

@Component ({
    selector: 'explore',
    template: require('./exploredetail.component.html'),
    providers: [
        PodcastService,
        FeedService
    ]
})
export class ExploreDetailComponent {
    constructor(private _podcastService: PodcastService, private _routeParams: RouteParams, private _feedService: FeedService) { }

    podcast: Podcast;
    feed: any;

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._podcastService.getPodcast(id)
            .then((podcast: Podcast) => this.podcast = podcast)
    }

    goBack() {
        window.history.back();
    }
    
    loadFeed(url: string) {
        this._feedService.getFeed(url)
            .then((feed: any) => (
                this.feed = feed.responseData.feed
            ))
    }
}