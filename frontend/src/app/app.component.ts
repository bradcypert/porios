import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { LoadingService } from './services/loading.service';
import { Sound } from './data/sound.component';
import { PlaylistService } from './services/audio/playlist.service';

@Component({
  selector: 'porios',
  template: require('./app.component.html'),
  styles: [ 
    require('../assets/css/styles.scss'), 
    require('./app.component.scss'),
    require('./platform/core/styles/platform.scss')
  ],
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

  removeSound(event: Event, sound: Sound) {
    event.stopImmediatePropagation();
    event.preventDefault();
    this._playlistService.removeSound(sound);
  }
}
