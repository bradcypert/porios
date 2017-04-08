import {
  Component,
  Injectable,
  HostBinding,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit
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
export class ExploreDetailComponent implements OnInit, AfterViewInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;
  @ViewChild('tabContainer') public tabContainer: ElementRef;

  /* tslint:disable */
  public podcast: Podcast = new Podcast();
  /* tslint:enable */

  public displayCount: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _audioService: AudioService,
    private _podcastService: PodcastService
  ) {
    this.podcast = new Podcast( _route.snapshot.data['data'].json()[0] );
  }

  public ngOnInit() {
    this._calculateHeight();
  }

  public ngAfterViewInit() {
    this._subscribeScroll();
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

  private _subscribeScroll() {
    let parent: HTMLElement = this.tabContainer.nativeElement;
    let el: any = parent.getElementsByClassName('mat-tab-body-wrapper')[0].children[0];

    if (el instanceof HTMLElement) {
      el.onscroll = (event: any) => {
        this._onScroll(event);
      };
    }
  }

  private _calculateHeight(offset: number = 0) {
    let el: HTMLElement = this.tabContainer.nativeElement;
    let tabContainerHeight = el.clientHeight;
    let listHeight: number = 48;
    let tmpDisplayCount = ((tabContainerHeight * 2) + offset) / listHeight;

    if (tmpDisplayCount > this.displayCount) {
      this.displayCount = tmpDisplayCount
    }
  }

  private _onScroll(event: Event) {
    let pos = event.srcElement.scrollTop;

    this._calculateHeight(pos);
  }

}
