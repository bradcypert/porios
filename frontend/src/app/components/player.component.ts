import { Component } from '@angular/core';

@Component ({
    selector: 'player',
    template: require('./player.component.html')
})
export class PlayerComponent {
    private audio = new Audio();
    private isPlaying = false;

    ngOnInit() {
        this.audio.src = "http://localhost:8080/src/assets/audio/nsp.mp3";
        this.audio.load();
    }

    playAudio() {
        this.audio.play();
        this.isPlaying = true;
    }
}