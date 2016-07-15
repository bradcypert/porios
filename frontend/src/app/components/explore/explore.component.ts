import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { PodcastService } from '../../services/podcast.service';
import { RestService } from '../../services/rest.service';

import { unique } from '../../utils/arrays';

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

    constructor(private _restService: RestService, private _podcastService: PodcastService, private _router: Router) { }

    categorizePodcasts(value: Array<any>) {
        if (value) {

            this.genres = value.map((p: any) => p.genre);
            this.genres = this.genres.filter(unique);
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
        this._restService.getData('podcasts', (data: any) => {
            this.podcasts = this.categorizePodcasts(data)
        });
    }

    exploreDetail(podcast: any) {
        let link = ['ExploreDetail', { id: podcast.id }];
        this._router.navigate(link);
    }
}