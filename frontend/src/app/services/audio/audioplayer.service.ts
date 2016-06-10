import { Injectable } from '@angular/core';

import { Audio } from '../../data/audio.component';

@Injectable()
export class SoundManagerSoundPlayer {
	private audioObject: any;
	private subscribers: Object = {};
	private lastSong: Audio;
    
	constructor() {	}

	play() {
		if (this.audioObject) {
			this.audioObject.resume();
		}
	}

	pause() {
		if (this.audioObject) {
			this.audioObject.pause();
		}
	}

	seek(percent: number) {
		if (this.audioObject) {
			var time = this.audioObject.duration * percent / 100;
			this.audioObject.setPosition(time);
		}
	}

	currentTime(): number {
		if (!this.audioObject) return;
		return this.audioObject.position;
	}

	totalTime():number {
		if (!this.audioObject) return;
		return this.audioObject.duration;
	}

	setVolume(value: number) {
		if (!this.audioObject) return;
		this.audioObject.setVolume(value);
	}

	getVolume(): number {
		if (!this.audioObject) return;
		return this.audioObject.volume;
	}

	on(event: any, handler: () => void) {
		if (!this.subscribers[event]) this.subscribers[event] = [];
		this.subscribers[event].push(handler);
	}

	publish(event: any, data: any) {
		if (this.subscribers[event]) {
			this.subscribers[event].forEach((handler: any) => {
				handler(data);
			});
		}
	}

	private subscribeSoundCloudPlayerEvent() {
		if (!this.audioObject) return;
	}
}