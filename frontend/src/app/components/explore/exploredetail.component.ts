import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Podcast } from '../../data/podcast.component';
import { PodcastService } from '../../services/podcast.service';
import { FeedService } from '../../services/feed.service';

@Component ({
    selector: 'explore',
    template: require('./exploredetail.component.html'),
    styles: [require('./exploredetail.component.css')],
    providers: [
        PodcastService,
        FeedService
    ]
})
export class ExploreDetailComponent {
    constructor(private _podcastService: PodcastService, private _routeParams: RouteParams, private _feedService: FeedService) { }

    private dummyFeed: string = 'http://www.qdnow.com/grammar.xml';

    private podcast: Podcast;
    private feed: any;
    private photo: string = 'http://localhost:3000/src/assets/img/placeholders/dev-tea.png';

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._podcastService.getPodcast(id)
            .then((podcast: Podcast) => {
                this.podcast = podcast;
                console.log(this.podcast);
                this.loadFeed(this.dummyFeed);
            });
    }

    goBack() {
        window.history.back();
    }
    
    loadFeed(url: string) {
        this._feedService.getFeed(url)
            .then((feed: any) => {
                this.feed = feed.responseData.feed;
                console.log(this.feed);
            })
    }
}