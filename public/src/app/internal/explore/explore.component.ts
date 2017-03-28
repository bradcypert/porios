import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import {
  Podcast,
  PodcastService
} from '../../shared/podcast';

@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

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
