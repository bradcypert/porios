import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { TitleService } from "../../services/title.service";

@Component ({
    selector: 'feed',
    template: require('./feed.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class FeedComponent {

    constructor(private _ga: AnalyticsService, private _title: TitleService) { }

    ngOnInit() {
        this._title.setTitle('Feed');
        this._ga.page();
    }
}