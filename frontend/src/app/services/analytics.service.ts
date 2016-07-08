import { Injectable } from '@angular/core';
import ga = UniversalAnalytics.ga;

@Injectable()
export class AnalyticsService {
    constructor(private _ga: ga) {}

    page(path?: string, title?: string) {
        console.log('the fuck', arguments);
        // this._ga('send', {
        //     hitType: 'pageview',
        //     page: path,
        //     title: title
        // });
    }

    event(action: string, category: string, label?: string, value?: number) {
        this._ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value
        })
    }
}