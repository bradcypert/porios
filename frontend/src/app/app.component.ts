import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';

@Component({
  selector: 'porios',
  template: require('./app.component.html'),
  styles: [require('../assets/css/styles.scss'), require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES, SidebarComponent, PlayerComponent],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() { }
}
