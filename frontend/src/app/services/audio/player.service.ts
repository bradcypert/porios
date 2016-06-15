import { Injectable } from '@angular/core';

import { SoundService } from './sound.service';

import { Sound } from '../../data/sound.component';

@Injectable()
export class PlayerService {

	constructor ( private _soundService: SoundService ) { }

	loadSound (sound: Sound) {
		this._soundService.loadSound(sound);
	}

	play(sound?: Sound) {
		if (sound) {
			this.loadSound(sound);
		}
		if (this._soundService.getSound) {
			this._soundService.playSound();
		}
	}

	pause() {
		if (this._soundService.getSound) {
			this._soundService.pauseSound();
		}
	}

	seek(percent: number) {
		if (this._soundService.getSound) {
			var time = this._soundService.getDuration() * percent / 100;
			this._soundService.setCurrentTime(time);
		}
	}

	getPosition() {
		if (this._soundService.getCurrentTime() > 0) {
			let duration = this._soundService.getDuration();
			let currentTime = this._soundService.getCurrentTime();
			let percent = (100 / duration) * currentTime;
			return percent;
		}
	}

	currentTime(): number {
		if (!this._soundService.getSound()) return;
		return this._soundService.getCurrentTime()
	}

	totalTime(): number {
		if (!this._soundService.getSound()) return;
		return this._soundService.getDuration();
	}

	setVolume(value: number) {
		if (!this._soundService.getSound()) return;
		this._soundService.setVolume(value);
	}

	getVolume(): number {
		if (!this._soundService.getSound()) return;
		return this._soundService.getVolume();
	}

	getSound() {
		if (!this._soundService.getSound()) return;
		return this._soundService.getSound();
	}
}