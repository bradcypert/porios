import { ElementRef, Component, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AnalyticsService } from '../../services/analytics.service';
import { PlayerService } from '../../services/audio/player.service';
import { PlaylistService } from '../../services/audio/playlist.service';
import { TitleService } from '../../services/title.service';

@Component ({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class HomeComponent {

    private sound: HTMLAudioElement;
    private isPlaying: boolean = false;
    private el: HTMLElement;

    private colorArray: Array<any> = [
        'red',
        '#3498db',
        '#8e44ad'
    ]

    private pulsar: string = 'red';

    constructor( private _playlistService: PlaylistService, private element: ElementRef, private _playerService: PlayerService, private _renderer: Renderer, private _ga: AnalyticsService, private _title: TitleService ) {
        this.el = element.nativeElement;
    }

    ngAfterViewInit() {
        if (this._playerService.getSound()) {
            this.sound = this._playerService.getSound();
            this._renderer.listen(this.sound, 'timeupdate', () => {
                this.isPlaying = true;
                this.el.children[0].classList.add('active');
            });
            this._renderer.listen(this.sound, 'play', () => {
                this.isPlaying = true;
                this.el.children[0].classList.add('active');
            });
            this._renderer.listen(this.sound, 'pause', () => {
                this.isPlaying = false;
                this.el.children[0].classList.remove('active');
            })
        }
    }

    ngOnInit() {
        this._title.setTitle('Porios', { suffix: false });
        this._ga.page();
        this.getColor();
    }

    getColor() { 
        let self = this;

        setTimeout( function() {
            self.pulsar = self.colorArray[Math.floor(Math.random() * self.colorArray.length)]
            self.getColor();
        }, 1200)
    }

    toggleSound() {
        if (this.isPlaying) {
            this._playlistService.pauseSound();
        } else {
            this._playlistService.playSound();
        }
    }

}