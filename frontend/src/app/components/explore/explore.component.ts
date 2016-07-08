import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { AnalyticsService } from '../../services/analytics.service';
import { Podcast } from '../../data/podcast.component';
import { PodcastService } from '../../services/podcast.service';
import {TitleService} from "../../services/title.service";

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
    podcasts: {};
    genres: Array<string>;

    constructor(private _podcastService: PodcastService, private _router: Router, private _ga: AnalyticsService, private _title: TitleService) { }

    getPodcasts() {
        this._podcastService.getPodcasts()
            .then(podcasts => (
                this.podcasts = this.categorizePodcasts(podcasts)
            ))
            .catch(error => (
                console.error(error)
            ));
    }

    categorizePodcasts(value: Array<any>) {
        if (value) {

            this.genres = value.map((p: any) => p.genre);
            this.genres = this.genres.filter(this.onlyUnique);
            let groupedPodcasts = {};

            this.genres.map((c: any) => {
                groupedPodcasts[c] = [];
                value.map((p: any) => {
                    if (p.genre === c) {
                        groupedPodcasts[c].push(p);
                    }
                })
            })

            return groupedPodcasts;
        }
    }

    ngOnInit() {
        this._title.setTitle('Explore');
        this._ga.page();
        this.getPodcasts();
    }

    exploreDetail(podcast: Podcast) {
        let link = ['ExploreDetail', { id: podcast.id }];
        this._router.navigate(link);
    }

    onlyUnique(value: any, index: any, self: any) {
        return self.indexOf(value) === index;
    }
}