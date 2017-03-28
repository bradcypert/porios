import {Component, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
    selector: 'pp4',
    template: require('./app.component.html'),
	styles: [
		require('./platform/core/styles/platform.scss'),
		require('./styles.scss')
	],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	private currentRoute: string = '';

	constructor(private _router: Router, private viewContainerRef: ViewContainerRef){
		this.viewContainerRef = viewContainerRef;
		_router.events.subscribe((val) => {

			if (val instanceof NavigationStart)
				//this._loadingService.toggleLoadingIndicator(true);

			if (val instanceof NavigationEnd) {
				//this._loadingService.toggleLoadingIndicator(false);
				this.onRouteChange(val);
			}
				
		})
	}

	onRouteChange(route: any) {
	}
}
