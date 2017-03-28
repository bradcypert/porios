import { Component } from '@angular/core';

import { RestService, ParserService } from '../shared/services';
import { Podcast } from './interfaces/podcast.interface';

@Component({
    selector: 'podcasts',
    template: require('./podcasts.component.html'),
    styles: [ require('./podcasts.component.scss') ]
})
export class PodcastsComponent {

    public podcasts: Array<Podcast> = [];

    constructor( private _restService: RestService, private _parserService: ParserService ) {
        _restService.get('podcasts')
            .then((res: any) => {
                this.podcasts = res.json();
            })
    }

}