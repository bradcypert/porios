import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {
    private soundObject: HTMLAudioElement;
    private isPlaying: boolean;

    getSound() {
        return this.soundObject;
    }

    loadSound(sound: HTMLAudioElement) {
        this.soundObject = sound;
    }
   
}