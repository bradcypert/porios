import { ViewChild, Component, ElementRef, Renderer } from '@angular/core';

import { TimelineDirective } from '../../directives/timeline.directive';

import { PlayerService } from '../../services/audio/player.service';
import { PlaylistService } from '../../services/audio/playlist.service';

import { Sound } from '../../data/sound.component';
import { AnalyticsService } from "../../services/analytics.service";

@Component({
    selector: 'player',
    template: require('./player.component.html'),
    styles: [require('./player.component.scss')],
    directives: [
        TimelineDirective
    ]
})
export class PlayerComponent {

    @ViewChild(TimelineDirective) timeline: TimelineDirective;

    private soundObject: any;

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

        tmp.duration = "3.24";
        tmp.podcast = "Ninja Sex Party";
        tmp.image = "https://indypopcon.com/wp-content/uploads/2015/12/Ninja-sex-party.jpg";
        this._playlistService.addSound(tmp);

        this.soundObject = this._playlistService.getSound();  
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
            this.renderer.listen(this.sound, 'loadstart', () => {
                this.soundObject = this._playlistService.getSound();
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
}