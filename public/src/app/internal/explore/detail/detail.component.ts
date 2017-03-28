import {
  Component,
  Injectable,
  HostBinding
} from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {
  Podcast,
  PodcastEpisode,
  PodcastService
} from '../../../shared/podcast';
import { AudioService } from '../../../shared/audio';
import { slideInLeftAnimation } from '../../../app.animations';

@Injectable()
export class ExploreDetailResolver implements Resolve<any> {

  constructor( private _podcastService: PodcastService ) {

  }
  
  public resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this._podcastService.get(1);
  }

};

@Component({
  selector: 'explore-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ],
  animations: [ slideInLeftAnimation ]
})
export class ExploreDetailComponent {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  /* tslint:disable */
  public podcast: Podcast = new Podcast();
  public dummyEpisodes: PodcastEpisode[] = [
    new PodcastEpisode('Test Episode', 'http://www.podtrac.com/pts/redirect.mp3/media.blubrry.com/grammargirl/traffic.libsyn.com/grammar/gg_561.mp3'),
  ];
  /* tslint:enable */

  constructor( private _route: ActivatedRoute, private _audioService: AudioService ) {
    this.podcast = _route.snapshot.data['data'].json();
  }

  public onClick(episode: PodcastEpisode) {
    if (this._audioService.src !== episode.url) {
      this._audioService.load(episode);
    } else {
      this._audioService.toggle();
    }
  }

}
