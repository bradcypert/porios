import {
    Component,
    HostBinding
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { MdSliderChange } from '@angular/material';

import { Subscription } from 'rxjs';

import { SlideInBottomAnimation } from '../../app.animations';

import { IAudioEvent, ITimeEvent, AudioService } from '../../shared/audio';
import { PodcastEpisode } from '../../shared/podcast';

@Component({
    selector: 'seeker',
    templateUrl: './seeker.component.html',
    styleUrls: [ './seeker.component.css' ],
    animations: [ SlideInBottomAnimation() ]
})
export class SeekerComponent {
    
    @HostBinding('@slideInBottom') public showSeeker: boolean = false;

    public episode: PodcastEpisode = new PodcastEpisode();
    public progress: number = 0;
    public timeStamp: string = '0:00:00 / 0:00:00';

    private _datePipe: DatePipe = new DatePipe('en-US');
    private _subscriptions: Subscription[] = [];
    private _audio: HTMLAudioElement;

    constructor( private _audioService: AudioService ) {
        this._subscriptions.push(_audioService.audioChange.subscribe((event: IAudioEvent) => {
            if (event.audio && event.episode) {
                this.showSeeker = true;
                this.episode = event.episode;
                this._audio = event.audio;
            } else {
                this.showSeeker = false;
            }
        }));
        this._subscriptions.push(_audioService.timeUpdate.subscribe((event: ITimeEvent) => {
            this._setProgress(event);
            this._setTimeStamp(event);
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
        if (!this._audio) {
            return;
        }

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
        if (!this._audio) {
            return;
        }

        let duration = this._audio.duration;
        let timeStamp = event.timeStamp;
        this.progress = (timeStamp / duration) * 100;
    }

    private _setTimeStamp(event: ITimeEvent) {
        if (!this._audio) {
            return;
        }

        let duration: string;
        if (this._audio.duration) {
            duration = new Date(this._audio.duration * 1000).toISOString();
        } else {
            duration = new Date(0).toISOString();
        }
        let current = new Date(event.timeStamp * 1000).toISOString();

        this.timeStamp = current.substr(11, 8) + ' / ' + duration.substr(11, 8);
    }

}
