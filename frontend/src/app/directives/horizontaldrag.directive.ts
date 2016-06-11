import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[horizontaldrag]',
	host: {
		'(mousemove)': 'onMouseMove($event)',
		'(mouseup)': 'onMouseUp($event)',
		'(mousedown)': 'onMouseDown($event)',
	}
})
export class HorizontalDrag {

	private el: HTMLElement;
	private parent: HTMLElement;
	private isMouseDown: boolean = false;

	private x_pos: number = 0;
	private y_pos: number = 0;

	constructor ( el: ElementRef ) { 
		this.el = el.nativeElement;
		this.parent = this.el.parentElement;
		this.el.style.position = 'relative';
		this.el.style.cursor = 'pointer';
		this.el.style.display = 'block';
	}

	onMouseMove (event: MouseEvent) {
		if ( this.isMouseDown ) {
			this.onMouseDrag(event);
		}
	}

	onMouseUp (event: MouseEvent) {
		this.isMouseDown = false;
	}
	
	onMouseDown (event: MouseEvent) {
		this.isMouseDown = true;
	}

	onMouseDrag (event: MouseEvent) {
		event.preventDefault();

		let leftOffset = this.parent.offsetLeft + event.offsetX;
		let topOffset = this.parent.offsetTop + event.offsetY;

		this.x_pos = event.clientX;
		this.y_pos = event.clientY;

		let left = (this.x_pos - leftOffset) + 'px';
		let top = (this.y_pos - topOffset) + 'px';

		this.el.style.left = left;
		//this.el.style.top = top;
	}
}