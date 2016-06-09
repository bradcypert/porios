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
    podcasts: {};
    categories: Array<string>;

    constructor(private _podcastService: PodcastService, private _router: Router) { }

    getPodcasts() {
        this._podcastService.getPodcasts().then(podcasts => (
            this.podcasts = this.categorizePodcasts(podcasts)
        ));
    }

    categorizePodcasts(value: Array<any>) {
        if (value) {
            this.categories = value.map((p: any) => p.category);
            this.categories = this.categories.filter(this.onlyUnique);
            let groupedPodcasts = {};

            this.categories.map((c: any) => {
                groupedPodcasts[c] = [];
                value.map((p: any) => {
                    if (p.category === c) {
                        groupedPodcasts[c].push(p);
                    }
                })
            })

            return groupedPodcasts;
        }
    }

    ngOnInit() {
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