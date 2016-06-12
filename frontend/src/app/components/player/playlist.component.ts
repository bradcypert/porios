import { Component, ElementRef } from '@angular/core';

import { Sound } from '../../data/sound.component';
import { PlaylistService } from '../../services/audio/playlist.service';

@Component({
    selector: 'playlist',
    template: require('./playlist.component.html')
})
export class PlaylistComponent {

    public playlist: Array<Sound>;
    private el: HTMLElement;

    constructor(private _playlistService: PlaylistService, private element: ElementRef) {
        this.el = element.nativeElement;
    }

    private isOpen: boolean = false;

    ngOnInit() {
        this.playlist = this._playlistService.getPlaylist();
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }

    getState() {
        return this.isOpen;
    }

    setCurrentSound(sound: Sound) {
        this._playlistService.setCurrentSound(sound);
    }
}