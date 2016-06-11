import { Injectable } from '@angular/core';

import { Sound } from '../../data/sound.component';

@Injectable()
export class SoundService {
    private soundObject: HTMLAudioElement = new Audio();
    private isPlaying: boolean;

    getSound() {
        return this.soundObject;
    }

    loadSound(sound: Sound) {
        this.soundObject.src = sound.src;
    }
   
    playSound() {
        this.soundObject.play()
    }

    pauseSound() {
        this.soundObject.pause();
    }

    getDuration() {
        return this.soundObject.duration;
    }

    getCurrentTime() {
        return this.soundObject.currentTime;
    }

    setCurrentTime(value: any) {
        this.soundObject.currentTime = value;
    }

    getVolume() {
        return this.soundObject.volume;
    }

    setVolume(value: any) {
        this.soundObject.volume = value;
    }

}