import { ViewChild, Component, ElementRef, Renderer } from '@angular/core';

import { PlaylistComponent } from './playlist.component';

import { TimelineDirective } from '../../directives/timeline.directive';

import { PlayerService } from '../../services/audio/player.service';
import { PlaylistService } from '../../services/audio/playlist.service';

import { Sound } from '../../data/sound.component';
import { AnalyticsService } from "../../services/analytics.service";

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
    private open: boolean = false;
    private el: HTMLElement;

    constructor(private element: ElementRef, private _playerService: PlayerService, private renderer: Renderer, private _playlistService: PlaylistService, private _ga: AnalyticsService) {
        this.el = element.nativeElement;
    }

    ngOnInit() {
        let tmpsrc = 'http://localhost:3000/src/assets/audio/nsp.mp3';
        let tmpMeta = 'nsp';
        let tmp = new Sound(tmpMeta, tmpsrc);

        let tmpsrc2 = 'http://localhost:3000/src/assets/audio/nsp2.mp3';
        let tmpMeta2 = 'nsp2';
        let tmp2 = new Sound(tmpMeta2, tmpsrc2);

        this._playlistService.addSound(tmp);
        this._playlistService.addSound(tmp2);

        this.playerClose(false);
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
            });
            this.renderer.listen(this.sound, 'ended', () => {
                this._playlistService.nextSound();
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

    playerClose(track: boolean = true) {
        if(track) {
            this._ga.event({
                action: AnalyticsService.EventTypes.TOGGLE,
                category: 'player',
                label: 'close'
            });
        }
        // TODO: this is brittle. change this to use a pub-sub, or an element reference.
        this.el.parentElement.parentElement.classList.remove('open');
        this.open = false;
    }

    playerOpen() {
        this._ga.event({
            action: AnalyticsService.EventTypes.TOGGLE,
            category: 'player',
            label: 'open'
        });
        // TODO: this is brittle. change this to use a pub-sub, or an element reference.
        this.el.parentElement.parentElement.classList.add('open');
        this.open = true;
    }

    togglePlayer() {
        if (this.open) {
            this.playerClose();
        } else {
            this.playerOpen();
        }
    }
}