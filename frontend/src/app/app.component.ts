import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';

import { LoadingService } from './services/loading.service';
import { Sound } from './data/sound.component';
import { PlaylistService } from './services/audio/playlist.service';
import { PodcastService } from './services/podcast.service';

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
  public podcasts: Array<string> = [];

  constructor(private _router: Router, private _loadingService: LoadingService, private _playlistService: PlaylistService, private _podcastService: PodcastService) {
    _router.events.subscribe(val => {
      if (val instanceof NavigationStart)
        this._loadingService.toggleLoadingState(true);
      if (val instanceof NavigationEnd)
        this._loadingService.toggleLoadingState(false);
    })
  }

  ngOnInit() {
    this.playlist = this._playlistService.getPlaylist();
    this._podcastService.getPodcasts().then(
      (res: Array<any>) => {
        res.map(c => {
          this.podcasts.push(c);
        })
      }
    )
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

// <input [(ngModel)]="asyncSelected"
//          [typeahead]="dataSource"
//          [typeaheadOptionsLimit]="7"
//          [typeaheadOptionField]="'name'"
//          placeholder="Locations loaded with timeout"
//          class="form-control">