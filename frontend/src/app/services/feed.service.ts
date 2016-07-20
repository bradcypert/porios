import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

import { ParserService } from './parser.service';

interface Window {
    prototype: any;
}

export class feedAbstract {

    raw: any;
    image: string;
    title: string;
    description: string;
    episodes: Array<any> = [];
    copyright: string;
    owner = {
        email: '',
        name: ''
    };
    link: string;

    constructor(feed: any) {
        this.raw = feed;
    }
}

export class itunesFeed extends feedAbstract {

    constructor(feed: any) {
        super(feed);

        this.image = feed.rss.channel['itunes:image']['@href'];
        this.owner.email = feed.rss.channel['itunes:owner']['itunes:email'];
        this.owner.name = feed.rss.channel['itunes:owner']['itunes:name'];
        this.link = feed.rss.channel.link;
        
        this.title = feed.rss.channel.title;
        this.description = feed.rss.channel.description;
        this.copyright = feed.rss.channel.copyright;
        this.parseEpisodes();
    }

    parseEpisodes() {
        for (let episode of this.raw.rss.channel.item) {
            let entry = {
                title: episode.title,
                subtitle: episode['itunes:subtitle'],
                summary: episode['itunes:summary'],
                duration: episode['itunes:duration'],
                date: episode.pubDate,
                payload: episode.enclosure['@url']
            }
            this.episodes.push(entry);
        }
    }
}

@Injectable()
export class FeedService {
        
    constructor ( private _http: Http, private _parserService: ParserService, private _window: Window ) { }

    getFeed(xmlStr: any, type: any) {
        //console.log(this._parserService.parseXml(xmlStr));
        let xmlObj = new type(this._parserService.parseXml(xmlStr));
        return xmlObj;
    }
}