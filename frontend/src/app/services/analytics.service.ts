import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {TitleService} from "./title.service";

const EventTypes = {
    TOGGLE: 'toggle',
    CLICK: 'click',
    SEARCH: 'search'
};

interface Window {
    ga: any
}

@Injectable()
export class AnalyticsService {
    public static EventTypes = EventTypes;

    private _ga: UniversalAnalytics.ga;

    constructor(private _window: Window, private _title: TitleService) {
        this._ga = this._window.ga;
    }
    
    page({ title, path, stripSuffix = true } : { title?: string, path?: string, stripSuffix?: boolean } = {}) {
        this._ga('send', _.pickBy({
            hitType: 'pageview',
            page: path || location.pathname,
            title: stripSuffix ? this._title.stripSuffix(title || document.title) : title
        }, value => typeof value !== 'undefined'));
    }

    event({ action, category, label, value } : { action: string, category: string, label?: string, value?: number }) {
        this._ga('send', _.pickBy({
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value
        }, value => typeof value !== 'undefined'));
    }
}