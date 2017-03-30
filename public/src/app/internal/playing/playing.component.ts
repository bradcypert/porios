import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import {
  IAudioEvent,
  AudioService
} from '../../shared/audio';
import { Podcast } from '../../shared/podcast';
import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css'],
  animations: [slideInLeftAnimation]
})
export class PlayingComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public podcast: Podcast;

  private _subscriptions: Subscription[] = [];

  constructor ( private _audioService: AudioService ) {

  }
  
  public ngOnInit() {
    this.podcast = this._audioService.podcast;
    this._subscriptions.push(
      this._audioService.audioChange.subscribe((event: IAudioEvent) => {
        this.podcast = event.podcast;
      })
    );
  }

  public ngOnDestroy() {
    this._subscriptions.map((c: Subscription) => {
      c.unsubscribe();
    });
  }

}
