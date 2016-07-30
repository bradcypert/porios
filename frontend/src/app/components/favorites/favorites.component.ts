import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { TitleService } from "../../services/title.service";

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component ({
    selector: 'favorites',
    template: require('./favorites.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES
    ]
})
export class FavoritesComponent {

    constructor(private _ga: AnalyticsService, private _title: TitleService) { }

    ngOnInit() {
        this._title.setTitle('Favorites');
        this._ga.page();
    }
}