import { Component, ElementRef } from '@angular/core';

import { PlayerService } from '../services/audio/player.service';

@Component ({
    selector: 'timeline',
    template: `
        <div id="timeSlider" (click)='changePlaybackTime($event)'>
			<span id='sliderHandler' tabindex="0" [style.left]="calculatePositionByTime()" [style.top]="sliderHandlerPositionY"></span>
		</div>
        `
})
export class TimelineDirective {

    private position: number;

    private timelinePosition: any;

    constructor ( private element: ElementRef, private _playerService: PlayerService ) {
        
    }

    ngOnInit () {
        let offset = this.element.nativeElement.getBoundingClientRect();
		let width = this.element.nativeElement.style.width;
		let height = this.element.nativeElement.style.height;
    }

    setPosition(value: number) {
        this.position = value;
    }

	calculatePositionByTime() {
        if (this.position) {
            let percent = this.position / 100;
            let width = this.getTimeSliderWidth();
            let pos = ((percent * width) - 7.5).toString() + 'px';
            return pos;
        }
	}

	changePlaybackTime($event: any) {
		let time = this.calculateTimePercentOnClick($event);
		this._playerService.seek(time);
	}

	private calculateTimePercentOnClick($event: any) {
		let parentX = this.getTimeSliderWidth();
		let percent = $event.offsetX * 100 / parentX;
		return percent;
	}

	private getTimeSliderWidth() {
		return parseInt(this.element.nativeElement.children[0].clientWidth);
	}
    
}