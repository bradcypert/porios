import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Podcast } from '../../data/podcast.component';
import { AnalyticsService } from '../../services/analytics.service';
import { PodcastService } from '../../services/podcast.service';
import { FeedService, itunesFeed } from '../../services/feed.service';
import { TitleService } from '../../services/title.service';

@Component ({
    selector: 'explore',
    template: require('./exploredetail.component.html'),
    styles: [require('./exploredetail.component.scss')],
    providers: [
        PodcastService,
        FeedService
    ]
})
export class ExploreDetailComponent {
    constructor(private _podcastService: PodcastService, private _route: ActivatedRoute, private _feedService: FeedService, private _ga: AnalyticsService, private _title: TitleService) { }

    private sub: any;
    private podcast: Podcast;
    private feed: any;
    private photo: string = 'http://localhost:3000/src/assets/img/placeholders/dev-tea.png';

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = +params['id'];
            this._ga.page({ title: `Podcast#${id}` });
            this._podcastService.getPodcast(id)
                .then((podcast: Podcast) => {
                    this.podcast = podcast;
                    this._title.setTitle(this.podcast.name);
                    this.feed = this._feedService.getFeed(this.podcast.feed, itunesFeed);
                });
        })
    }

    goBack() {
        window.history.back();
    }
}