import {
  Component,
  Injectable,
  HostBinding,
  ViewChild,
  ElementRef,
  OnInit
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
    let id = route.params['id'];
    
    if (id) {
      return this._podcastService.get(id);
    }
  }

};

@Component({
  selector: 'explore-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ],
  animations: [ slideInLeftAnimation ]
})
export class ExploreDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;
  @ViewChild('episodesTab') public episodesTab: ElementRef;

  /* tslint:disable */
  public podcast: Podcast = new Podcast();
  /* tslint:enable */

  constructor(
    private _route: ActivatedRoute,
    private _audioService: AudioService,
    private _podcastService: PodcastService
  ) {
    this.podcast = new Podcast( _route.snapshot.data['data'].json()[0] );
  }

  public ngOnInit() {
    console.log(this.episodesTab);
  }

  public listen(podcast: Podcast, episode: PodcastEpisode) {
    if (this._audioService.src !== episode.url) {
      this._audioService.load(this.podcast, episode);
    } else {
      this._audioService.toggle();
    }
  }

  public subscribe(podcast: Podcast) {
    this._podcastService.subscribe(podcast);
  }

  public onSelectChange(event: Event) {
    console.log(event);
  }

  public onScroll(event: Event) {
    let el = event.target;
    let pos = event.srcElement.scrollTop;
    console.log(pos);
  }

}
