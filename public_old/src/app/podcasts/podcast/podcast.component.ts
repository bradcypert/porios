import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TdLoadingService, ILoadingOptions, LoadingType } from '../../platform/core';

import { RestService, ParserService, SoundService } from '../../shared/services';
import { Podcast } from '../interfaces/podcast.interface';

@Component({
    selector: 'podcast',
    template: require('./podcast.component.html')
})
export class PodcastComponent {

    public podcast: any;
    public meta: any;
    public episodes: Array<any>;

    constructor(private _route: ActivatedRoute, private _restService: RestService, private _parserService: ParserService,
        private _loadingService: TdLoadingService, private _viewContainerRef: ViewContainerRef, private _soundService: SoundService) {
        if (!_loadingService.getContextContainer('podcastLoader')) {
            let options: ILoadingOptions = {
                name: 'podcastLoader',
                type: LoadingType.Circular,
            };
            this._loadingService.createOverlayComponent(options, _viewContainerRef);
        }
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            if (id) {
                this.getPodcast(id);
            }
        });
    }

    registerLoading() {
        this._loadingService.register('podcastLoader');
    }

    resolveLoading() {
        this._loadingService.resolve('podcastLoader');
    }

    getPodcast(id: number) {
        this.registerLoading();

        this._restService.get('podcasts/' + id)
            .then((res: any) => {
                this.podcast = res.json()[0];
                this.parse(this.podcast.feed);
            });
    }

    parse(xml: any) {
        let self = this;

        let FeedParser = require('feedparser');
        let feedparser = new FeedParser();

        feedparser.write(xml);

        feedparser.on('error', function (error: any) {
            console.error(error);
        });
        feedparser.on('readable', function () {
            let stream = this;
            self.meta = this.meta;
            let item: any;
            self.episodes = [];

            while (item = stream.read()) {
                self.episodes.push(item);
            }

            console.log(self.meta);
            console.log(self.episodes);
            self.resolveLoading();
        });
    }

    isPlaying(episode: any) {
        if (this._soundService.soundSource == episode.enclosures[0].url) {
            if (this._soundService.soundPlaying) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    toggle(episode: any) {
        if (this._soundService.soundSource == episode.enclosures[0].url) {
            if (this._soundService.soundPlaying) {
                this._soundService.pauseSound();
            } else {
                this._soundService.playSound();
            }
        } else {
            this._soundService.pauseSound();
            this._soundService.soundSource = episode.enclosures[0].url;
            this._soundService.playSound();
        }
    }

}