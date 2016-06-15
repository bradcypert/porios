import { ElementRef, Component, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PlayerService } from '../services/audio/player.service';
import { PlaylistService } from '../services/audio/playlist.service';

@Component ({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class HomeComponent {

    private sound: HTMLAudioElement;
    private isPlaying: boolean = false;
    private el: HTMLElement;

    private colorArray: Array<any> = [
        'red'
    ]

    constructor( private _playlistService: PlaylistService, private element: ElementRef, private _playerService: PlayerService, private _renderer: Renderer ) {
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

    getColor() { 
        return this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
    }

    toggleSound() {
        if (this.isPlaying) {
            this._playlistService.pauseSound();
        } else {
            this._playlistService.playSound();
        }
    }

}