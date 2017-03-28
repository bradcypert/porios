import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { IAudioEvent, AudioService } from '../../shared/audio';
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
            this._audio.ontimeupdate = (timeEvent: Event) => {
                this._setProgress(timeEvent);
            };
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

    public setVolume(event: number) {
        let volume = event / 100;

        if (volume > 1) {
            volume = 1;
        } else if (volume < 0) {
            volume = 0;
        }

        this._audioService.setVolume(volume);
    }

    private _setProgress(event: Event) {
        let duration = this._audio.duration * 1000;
        let timeStamp = event.timeStamp;
        this.progress = timeStamp / duration;
    }

}
