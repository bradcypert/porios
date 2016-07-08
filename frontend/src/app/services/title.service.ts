import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
    private _suffix: string = ' | Porios';

    constructor(private _title: Title) {}

    setTitle(title: string, { suffix = true } : { suffix? : boolean } = {}) {
        this._title.setTitle(title + (suffix ? this._suffix : ''));
    }

    stripSuffix(title: string) {
        return title ? title.replace(this._suffix, '') : title;
    }
}