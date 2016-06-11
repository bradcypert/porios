import { ViewChild, Component, ElementRef, Renderer } from '@angular/core';

import { PlaylistComponent } from './player/playlist.component';

import { TimelineDirective } from '../directives/timeline.directive';

import { PlayerService } from '../services/audio/player.service';

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

    private sound: HTMLAudioElement = new Audio();
    private isPlaying: boolean = false;

    constructor(private element: ElementRef, private _playerService: PlayerService, private renderer: Renderer) {

    }

    ngAfterViewInit() {

        this.renderer.listen(this.sound, 'timeupdate', () => {
            let position = this._playerService.getPosition();
            this.timeline.setPosition(position);
            this.timeline.calculatePositionByTime();
        });
    }

    ngOnInit() {
        this.sound.src = 'http://localhost:8080/src/assets/audio/nsp.mp3';
        this._playerService.loadSound(this.sound);
    }

    toggleState() {
        if (this.isPlaying) {
            this._playerService.pause();
            this.isPlaying = false;
        } else {
            this._playerService.play();
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