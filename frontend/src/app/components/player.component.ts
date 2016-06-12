import { ViewChild, Component, ElementRef, Renderer } from '@angular/core';

import { PlaylistComponent } from './player/playlist.component';

import { TimelineDirective } from '../directives/timeline.directive';

import { PlayerService } from '../services/audio/player.service';
import { PlaylistService } from '../services/audio/playlist.service';

import { Sound } from '../data/sound.component';

@Component({
    selector: 'player',
    template: require('./player.component.html'),
    directives: [
        TimelineDirective,
        PlaylistComponent
    ]
})
export class PlayerComponent {

    @ViewChild(PlaylistComponent) playlist: PlaylistComponent;
    @ViewChild(TimelineDirective) timeline: TimelineDirective;

    private isPlaying: boolean = false;
    private sound: HTMLAudioElement;

    constructor(private element: ElementRef, private _playerService: PlayerService, private renderer: Renderer, private _playlistService: PlaylistService) {

    }

    ngOnInit() {
        let tmpsrc = 'http://localhost:8080/src/assets/audio/nsp.mp3';
        let tmpMeta = 'nsp'
        let tmp = new Sound(tmpMeta, tmpsrc);

        let tmpsrc2 = 'http://localhost:8080/src/assets/audio/nsp2.mp3';
        let tmpMeta2 = 'nsp2'
        let tmp2 = new Sound(tmpMeta2, tmpsrc2);

        this._playlistService.addSound(tmp);
        this._playlistService.addSound(tmp2);
    }

    ngAfterViewInit() {
        if (this._playerService.getSound()) {
            this.sound = this._playerService.getSound();
            this.renderer.listen(this.sound, 'timeupdate', () => {
                let position = this._playerService.getPosition();
                this.timeline.setPosition(position);
                this.timeline.calculatePositionByTime();
            });
            this.renderer.listen(this.sound, 'play', () => {
                this.isPlaying = true;
            });
            this.renderer.listen(this.sound, 'pause', () => {
                this.isPlaying = false;
            })
        }
    }

    toggleState() {
        if (this.isPlaying) {
            this._playlistService.pauseSound();
            this.isPlaying = false;
        } else {
            this._playlistService.playSound();
            this.isPlaying = true;
        }
    }

    togglePlaylist() {
        if (this.playlist) {
            if (this.playlist.getState()) {
                this.playlist.close();
            } else {
                this.playlist.open();
            }
        }
    }
}