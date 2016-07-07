import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap';

import { PodcastService } from '../../services/podcast.service';

@Component({
    selector: 'sidebar',
    template: require('./sidebar.component.html'),
    styles: [require('./sidebar.component.css')],
    directives: [ROUTER_DIRECTIVES, TYPEAHEAD_DIRECTIVES]
})
export class SidebarComponent {
    public asyncSelected: string = "";

    public podcasts: Array<string> = ['Sample Podcast'];

    private cache: any;
    private prevContext: any;

    constructor(private _podcastService: PodcastService) {

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
            response => {
                return response;
            });
        return this.cache;
    }

    public typeaheadOnSelect(e: any): void {
        console.log(`Selected value: ${e.item}`);
    }
}