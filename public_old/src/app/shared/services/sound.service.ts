import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {
    
    private _soundObject: HTMLAudioElement = new Audio();
    get soundObject() {
        return this._soundObject;
    };
    set soundObject(soundObject: HTMLAudioElement) {
        this._soundObject = soundObject;
    }

    private _soundPlaying: boolean = false;
    get soundPlaying() {
        return this._soundPlaying;
    }

    get soundSource() {
        return this.soundObject.src;
    }
    set soundSource(soundSource: string) {
        this.soundObject.src = soundSource;
    }
   
    playSound() {
        this.soundObject.play()
        this._soundPlaying = true;
    }

    pauseSound() {
        this.soundObject.pause();
        this._soundPlaying = false;
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