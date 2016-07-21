import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap';

import { PodcastService } from '../../services/podcast.service';
import { AnalyticsService } from "../../services/analytics.service";
import { AnalyticsDirective } from "../../directives/analytics.directive";

import { PlayerComponent } from '../player/player.component';

@Component({
    selector: 'sidebar',
    template: require('./sidebar.component.html'),
    styles: [require('./sidebar.component.scss')],
    directives: [ROUTER_DIRECTIVES, 
        TYPEAHEAD_DIRECTIVES, 
        AnalyticsDirective,
        PlayerComponent]
})
export class SidebarComponent {
    public asyncSelected: string = "";

    public podcasts: Array<string> = ['Sample Podcast'];

    private cache: any;
    private prevContext: any;

    constructor(private _router: Router, private _podcastService: PodcastService, private _ga: AnalyticsService) {

    }

    search(query: string) {
        this._ga.event({
            action: AnalyticsService.EventTypes.SEARCH,
            category: 'sidebar-form',
            label: query
        });
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
                });
                return tmp;
            });
        return this.cache;
    }

    public typeaheadOnSelect(e: any): void {
        this._router.navigate(['ExploreDetail', { id: e.item.id }]);
    }
}