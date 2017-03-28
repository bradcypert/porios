import {
    Injectable,
    EventEmitter
} from '@angular/core';

import {
    Observable,
    Observer
} from 'rxjs';

import {
    PodcastEpisode
} from '../podcast/podcast';

export interface IAudioEvent {
    audio: HTMLAudioElement;
    episode: PodcastEpisode;
}

@Injectable()
export class AudioService {

    public audioChange: EventEmitter<IAudioEvent> = new EventEmitter();

    get src() {
        return this._audioObject.src;
    }

    private _episode: PodcastEpisode = new PodcastEpisode();
    private _audioObject: HTMLAudioElement = new Audio();

    public toggle() {
        if (this._audioObject.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    public play() {
        if (this._audioObject.src) {
            this._audioObject.play();
            this.audioChange.emit({
                audio: this._audioObject,
                episode: this._episode
            });
            this._episode.playing = true;
        }
    }

    public pause() {
        if (!this._audioObject.paused) {
            this._audioObject.pause();
            this.audioChange.emit({
                audio: this._audioObject,
                episode: this._episode
            });
            this._episode.playing = false;
        }
    }

    public load(episode: PodcastEpisode) {
        let src = episode.url;
        let fileType = (/[.]/.exec(src)) ? /[^.]+$/.exec(src) : undefined;
        let fileTypes = {
            'mp3': 'audio/mpeg',
            'ogg': 'audio/ogg',
            'mp4': 'audio/mp4'
        };
        let canPlay = this._audioObject.canPlayType(fileTypes[fileType[0]]);

        if (!canPlay || canPlay === '') {
            console.error('Invalid File Type');
        } else {
            this._audioObject.src = src;
            this._episode = episode;
            episode.loaded = true;
            episode.playing = true;
            this.play();
        }
    }

}
