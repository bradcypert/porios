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

export interface ITimeEvent {
  timeStamp: number;
}

@Injectable()
export class AudioService {

  public audioChange: EventEmitter<IAudioEvent> = new EventEmitter();
  public timeUpdate: EventEmitter<ITimeEvent> = new EventEmitter();

  get src() {
    return this._audioObject.src;
  }

  private _episode: PodcastEpisode = new PodcastEpisode();
  private _audioObject: HTMLAudioElement;

  constructor() {
    this._audioObject = new Audio();
    this._audioObject.ontimeupdate = (timeEvent: Event) => {
      if (this._audioObject.ended) {
        this._onEnded();
      } else {
        this.timeUpdate.emit({
          timeStamp: this._audioObject.currentTime
        });
      }
    };
  }

  public toggle() {
    if (!this._audioObject) {
      return;
    }

    if (this._audioObject.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  public play() {
    if (!this._audioObject) {
      return;
    }

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
    if (!this._audioObject) {
      return;
    }

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
    if (!this._audioObject) {
      return;
    }

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

  public setVolume(level: number) {
    if (!this._audioObject) {
      return;
    }

    if (this._audioObject.volume !== level) {
      this._audioObject.volume = level;
    }
  }

  public seekTo(time: number) {
    if (!this._audioObject) {
      return;
    }

    let duration = this._audioObject.duration;

    if (time > 0 || time <= duration) {
      this.pause();
      this._audioObject.currentTime = time;
      this.play();
    } else {
      console.error('Invalid Time');
    }
  }

  private _onEnded() {
    if (!this._audioObject) {
      return;
    }

    this.seekTo(0);
    this.pause();
  }

}
