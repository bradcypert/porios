import { Component } from '@angular/core';

import { MdSliderChange } from '@angular/material';

import { Subscription } from 'rxjs';

import { IAudioEvent, ITimeEvent, AudioService } from '../../shared/audio';
import { PodcastEpisode } from '../../shared/podcast';

@Component({
    selector: 'seeker',
    templateUrl: './seeker.component.html',
    styleUrls: [ './seeker.component.css' ]
})
export class SeekerComponent {
    
    public episode: PodcastEpisode = new PodcastEpisode();
    public progress: number = 0;

    private _subscriptions: Subscription[] = [];
    private _audio: HTMLAudioElement;

    constructor( private _audioService: AudioService ) {
        this._subscriptions.push(_audioService.audioChange.subscribe((event: IAudioEvent) => {
            this.episode = event.episode;
            this._audio = event.audio;
        }));
        this._subscriptions.push(_audioService.timeUpdate.subscribe((event: ITimeEvent) => {
            this._setProgress(event);
        }));
    }

    public play() {
        this._audioService.toggle();
    }

    public replay() {
        console.log('Replay');
    }

    public skipPrevious() {
        console.log('Skip Back');
    }

    public skipNext() {
        console.log('Skip Forward');
    }

    public star() {
        console.log('Star');
    }

    public seek(event: MdSliderChange) {
        let percent = event.value / 100;
        let duration = this._audio.duration;
        
        if (percent > 1) {
            percent = 1;
        } else if (percent < 0) {
            percent = 0;
        }

        let time = duration * percent;

        this._audioService.seekTo(time);
    }

    public setVolume(event: number) {
        let volume = event / 100;

        if (volume > 1) {
            volume = 1;
        } else if (volume < 0) {
            volume = 0;
        }

        this._audioService.setVolume(volume);
    }

    private _setProgress(event: ITimeEvent) {
        let duration = this._audio.duration;
        let timeStamp = event.timeStamp;
        this.progress = (timeStamp / duration) * 100;
    }

}
