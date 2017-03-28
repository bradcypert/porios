import { Injectable } from '@angular/core';

import { Config } from '../config';
import { ApiService } from '../api';
import { Podcast } from './podcast';

@Injectable()
export class PodcastService {

    constructor( private _api: ApiService ) {

    }

    public get(id?: number) {
        if (!id) {
            return this._api.getRequest('podcasts');
        } else {
            return this._api.getRequest('podcasts/' + id);
        }
    }

}
