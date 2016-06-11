import { Component } from '@angular/core';

import { Sound } from '../../data/sound.component';
import { PlaylistService } from '../../services/audio/playlist.service';

@Component ({
    selector: 'playlist',
    template: require('./playlist.component.html')
})
export class PlaylistComponent {

    public playlist: Array<Sound>;

    constructor (private _playlistServce: PlaylistService) { }

    private isOpen: boolean = false;

    ngOnInit() {
        this.playlist = this._playlistServce.getPlaylist();
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
        this._playlistServce.setCurrentSound(sound);
    }

}