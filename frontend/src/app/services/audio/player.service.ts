import { Injectable } from '@angular/core';

import { SoundService } from './sound.service';

@Injectable()
export class PlayerService {

	constructor ( private _soundService: SoundService ) { }

	loadSound (sound: HTMLAudioElement) {
		this._soundService.loadSound(sound);
	}

	play() {
		if (this._soundService.getSound) {
			this._soundService.getSound().play();
		}
	}

	pause() {
		if (this._soundService.getSound) {
			this._soundService.getSound().pause();
		}
	}

	seek(percent: number) {
		if (this._soundService.getSound) {
			var time = this._soundService.getSound().duration * percent / 100;
			this._soundService.getSound().currentTime = time;
		}
	}

	getPosition() {
		if (this._soundService.getSound().currentTime > 0) {
			let duration = this._soundService.getSound().duration;
			let currentTime = this._soundService.getSound().currentTime;
			let percent = (100 / duration) * currentTime;
			return percent;
		}
	}

	currentTime(): number {
		if (!this._soundService.getSound) return;
		return this._soundService.getSound().currentTime;
	}

	totalTime(): number {
		if (!this._soundService.getSound) return;
		return this._soundService.getSound().duration;
	}

	setVolume(value: number) {
		if (!this._soundService.getSound) return;
		this._soundService.getSound().volume = value;
	}

	getVolume(): number {
		if (!this._soundService.getSound) return;
		return this._soundService.getSound().volume;
	}
}