import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import {
  Podcast,
  PodcastService
} from '../../shared/podcast';
import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations: [ slideInLeftAnimation ]
})
export class ExploreComponent implements OnInit {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

  public podcasts: Podcast[] = [];

  constructor( private _podcastService: PodcastService, private _router: Router ) {

  }

  public ngOnInit() {
    this._podcastService.get().subscribe(
      (res: Response) => {
        this.podcasts = res.json();
      },
      (err) => {
        this._handleError(err);
      }
    );
  }

  public goTo(podcast: Podcast) {
    this._router.navigate(['/Explore/' + podcast['id']]);
  }

  private _handleError(err: any) {
    console.log(err.json());
  }

}
