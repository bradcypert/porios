import { Component, ElementRef } from '@angular/core';

import { Sound } from '../../data/sound.component';
import { PlaylistService } from '../../services/audio/playlist.service';
import { AnalyticsService } from "../../services/analytics.service";

@Component({
    selector: 'playlist',
    template: require('./playlist.component.html')
})
export class PlaylistComponent {

    public playlist: Array<Sound>;
    private el: HTMLElement;

    constructor(private _playlistService: PlaylistService, private element: ElementRef, private _ga: AnalyticsService) {
        this.el = element.nativeElement;
    }

    private isOpen: boolean = true;

    ngOnInit() {
        this.playlist = this._playlistService.getPlaylist();
    }

    open() {
        this._ga.event({
            action: AnalyticsService.EventTypes.TOGGLE,
            category: 'playlist',
            label: 'open'
        });

        this.isOpen = true;
    }

    close() {
        this._ga.event({
            action: AnalyticsService.EventTypes.TOGGLE,
            category: 'playlist',
            label: 'close'
        });

        this.isOpen = false;
    }

    getState() {
        return this.isOpen;
    }

    setCurrentSound(sound: Sound) {
        this._playlistService.setCurrentSound(sound);
    }
}