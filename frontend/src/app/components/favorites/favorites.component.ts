import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { TitleService } from "../../services/title.service";

@Component ({
    selector: 'favorites',
    template: require('./favorites.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class FavoritesComponent {

    constructor(private _ga: AnalyticsService, private _title: TitleService) { }

    ngOnInit() {
        this._title.setTitle('Favorites');
        this._ga.page();
    }
}