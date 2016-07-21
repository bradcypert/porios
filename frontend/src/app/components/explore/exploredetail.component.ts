import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Podcast } from '../../data/podcast.component';
import { AnalyticsService } from '../../services/analytics.service';
import { RestService } from '../../services/rest.service';
import { FeedService, itunesFeed } from '../../services/feed.service';
import { TitleService } from '../../services/title.service';
import { PlaylistService } from '../../services/audio/playlist.service';
import { Sound } from '../../data/sound.component';

@Injectable()
export class ExploreDetailResolver implements Resolve<any> {
    constructor( private _restService: RestService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._restService.subRequest('podcasts/' + route.params['id']);
    }
}

@Component ({
    selector: 'explore',
    template: require('./exploredetail.component.html'),
    styles: [require('./exploredetail.component.scss')],
    providers: [
        FeedService
    ]
})
export class ExploreDetailComponent {
    constructor(private _restService: RestService, private _route: ActivatedRoute, private _feedService: FeedService, private _ga: AnalyticsService, private _title: TitleService, private _playlistService: PlaylistService) { }

    private sub: any;
    private podcast: Podcast;
    private feed: any;

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = +params['id'];
            this._ga.page({ title: `Podcast#${id}` });
            this.podcast = this._route.snapshot.data['podcast'].json()[0];
            this._title.setTitle(this.podcast.name);
            this.feed = this._feedService.getFeed(this.podcast.feed, itunesFeed);
            console.log(this.feed);
        })
    }

    goBack() {
        window.history.back();
    }

    queuePodcast(podcast: any) {
        let sound = new Sound(podcast.title, podcast.payload);
        sound.duration = podcast.duration;
        sound.image = this.feed.image;
        sound.podcast = this.podcast.name;
        this._playlistService.addSound(sound);
    }
}