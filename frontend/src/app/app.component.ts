import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { TD_LAYOUT_DIRECTIVES } from '../platform/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaylistComponent } from './components/player/playlist.component';
import { LoadingService } from './services/loading.service';
import { LoadingIndicatorDirective } from './directives/loading-indicator.directive';
import { Sound } from './data/sound.component';
import { PlaylistService } from './services/audio/playlist.service';

@Component({
  selector: 'porios',
  template: require('./app.component.html'),
  styles: [require('../platform/core/styles/platform.scss'), 
    require('../assets/css/styles.scss'), 
    require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES,
    SidebarComponent,
    PlaylistComponent,
    LoadingIndicatorDirective,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  public playlist: Array<Sound>;

  constructor(private _router: Router, private _loadingService: LoadingService, private _playlistService: PlaylistService) {
    _router.events.subscribe(val => {
      if (val instanceof NavigationStart)
        this._loadingService.toggleLoadingState(true);
      if (val instanceof NavigationEnd)
        this._loadingService.toggleLoadingState(false);
    })
  }

  ngOnInit() {
    this.playlist = this._playlistService.getPlaylist();
  }

  setCurrentSound(sound: Sound) {
    this._playlistService.setCurrentSound(sound);
  }
}
