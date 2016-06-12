import { Injectable } from '@angular/core';

import { PlayerService } from '../../services/audio/player.service';

import { Sound } from '../../data/sound.component';

@Injectable()
export class PlaylistService {

    public currentSound: number;
    
    private playlist: Array<Sound> = [];
    private isPlaying: boolean;
    private sound: Sound;

    constructor( private _playerService: PlayerService ) { }

    addSound(sound: Sound) {
        this.playlist.push(sound);
        this.currentSound = this.playlist.indexOf(sound);
    }

    nextSound() {
        if (this.playlist.length > 0) {
            if ((this.currentSound + 1) >= this.playlist.length) {
                this.currentSound = 0;
                this.playSound;
            } else {
                this.currentSound += 1;
                this.playSound;
            }
        }
    }

    playSound() {
        if (this.playlist.length > 0) {
            this._playerService.loadSound(this.playlist[this.currentSound]);
            this._playerService.play();
            this.isPlaying = true;
        }
    }

    pauseSound() {
        if (this.playlist.length > 0) {
            this._playerService.pause();
            this.isPlaying = false;
        }
    }

    getSound(value?: number) {
        return this.playlist[this.currentSound];
    }

    getPlaylist() {
        return this.playlist;
    }

    setCurrentSound(sound: Sound) {
        if ( this.playlist.indexOf(sound) >= 0 ) {
            this.currentSound = this.playlist.indexOf(sound);
            this.playSound();
        }
    }

}