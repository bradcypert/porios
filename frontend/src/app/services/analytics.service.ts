import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {
    constructor() {}

    page(path?: string, title?: string) {
        console.log('the fuck', arguments);
        // this._ga('send', {
        //     hitType: 'pageview',
        //     page: path,
        //     title: title
        // });
    }

    event(action: string, category: string, label?: string, value?: number) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value
        })
    }
}