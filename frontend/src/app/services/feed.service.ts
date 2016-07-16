import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

import { ParserService } from './parser.service';

interface Window {
    prototype: any;
}

export class feedAbstract {

    title: string;
    description: string;
    episodes: Array<any>;

    constructor(feed: any) {

    }
}

export class itunesFeed extends feedAbstract {

    constructor(feed: any) {
        super(feed);

        this.title = feed.rss.channel.title;
        this.description = feed.rss.channel.description;
        this.episodes = this.parseEpisodes(feed.rss.channel.item);
    }

    parseEpisodes(episodes: Array<any>) {
        let entries: Array<any> = [];
        for (let episode of episodes) {
            let entry = {
                title: episode.title,
                summary: episode['itunes:summary']
            }
            entries.push(entry);
        }
        return entries;
    }
}

@Injectable()
export class FeedService {
        
    constructor ( private _http: Http, private _parserService: ParserService, private _window: Window ) { }

    getFeed(xmlStr: any, type: any) {
        let xmlObj = new type(this._parserService.parseXml(xmlStr));
        return xmlObj;
    }
}