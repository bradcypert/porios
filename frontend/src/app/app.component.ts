import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaylistComponent } from './components/player/playlist.component';
import { LoadingService } from './services/loading.service';
import { LoadingIndicatorDirective } from './directives/loading-indicator.directive';

@Component({
  selector: 'porios',
  template: require('./app.component.html'),
  styles: [require('../assets/css/styles.scss'), require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES, SidebarComponent, PlaylistComponent, LoadingIndicatorDirective],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor( private _router: Router, private _loadingService: LoadingService ) { 
    _router.events.subscribe(val => {
      if (val instanceof NavigationStart)
        this._loadingService.toggleLoadingState(true);
      if (val instanceof NavigationEnd)
        this._loadingService.toggleLoadingState(false);
    })
  }
}
