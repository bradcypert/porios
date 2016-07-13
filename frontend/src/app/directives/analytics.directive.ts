import { Directive, ElementRef, Input } from '@angular/core';
import {AnalyticsService} from "../services/analytics.service";

@Directive({
	selector: '[ga]'
})
export class AnalyticsDirective {
	private action: string;
	private category: string;
	private label: string;
	private value: number;

	private el: HTMLElement;

	constructor ( el: ElementRef, private _ga: AnalyticsService ) {
		this.el = el.nativeElement;

		this.action = this.el.getAttribute('ga-action');
		this.category = this.el.getAttribute('ga-category');
		this.label = this.el.getAttribute('ga-label');
		this.value = this.el.hasAttribute('ga-value') ? parseInt(this.el.getAttribute('ga-value')) : null;

		if(this.action == 'click') {
			this.el.addEventListener('click', this.onClick.bind(this))
		}
	}

	onClick(e: Event) {
		this._ga.event({
			action: this.action,
			category: this.category,
			label: this.label,
			value: this.value
		});
	}
}