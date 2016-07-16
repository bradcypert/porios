import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import {TitleService} from "../../services/title.service";

@Component ({
    selector: 'connect',
    template: require('./connect.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class ConnectComponent {
    constructor(private _ga: AnalyticsService, private _title: TitleService) { }

    ngOnInit() {
        this._title.setTitle('Connect');
        this._ga.page();
    }
}