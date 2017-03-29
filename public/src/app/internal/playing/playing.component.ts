import {
  Component,
  HostBinding
} from '@angular/core';

import { slideInLeftAnimation } from '../../app.animations';

@Component({
  selector: 'playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css'],
  animations: [slideInLeftAnimation]
})
export class PlayingComponent {

  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.route-animation') public classAnimation: boolean = true;

}
