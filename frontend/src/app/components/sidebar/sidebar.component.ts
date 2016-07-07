import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap';

import { PodcastService } from '../../services/podcast.service';

@Component({
    selector: 'sidebar',
    template: require('./sidebar.component.html'),
    styles: [require('./sidebar.component.scss')],
    directives: [ROUTER_DIRECTIVES, TYPEAHEAD_DIRECTIVES]
})
export class SidebarComponent {
    public asyncSelected: string = "";

    public podcasts: Array<string> = ['Sample Podcast'];

    private cache: any;
    private prevContext: any;

    constructor(private _router: Router, private _podcastService: PodcastService) {

    }

    public getContext(): any {
        return this;
    }

    public getAsyncData(context: any): Function {
        if (this.prevContext === context) {
            return this.cache;
        }

        this.prevContext = context;
        this.cache = () => this._podcastService.getPodcasts().then(
            (response: Array<Object>) => {
                let tmp: Array<Object> = [];
                let query = new RegExp(context.asyncSelected, 'ig');
                response.map((c: any) => {
                    if (query.test(c.name)) {
                        tmp.push(c);
                    }
                })
                return tmp;
            });
        return this.cache;
    }

    public typeaheadOnSelect(e: any): void {
        this._router.navigate(['ExploreDetail', { id: e.item.id }]);
    }
}